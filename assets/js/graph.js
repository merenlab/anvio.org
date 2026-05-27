var network_path = document.getElementById("network").getAttribute("path");
var __height = document.getElementById("network").getAttribute("height");

if (__height) {
    var innerWidth = $("#svg").width();
    var innerHeight = parseInt(__height);
} else {
    var innerWidth = window.innerWidth;
    var innerHeight = window.innerHeight - 90;
}

var w = innerWidth;
var h = innerHeight;

var keyc = true, keys = true, keyt = true, keyr = true, keyx = true, keyd = true, keyl = true, keym = true, keyh = true, key1 = true, key2 = true, key3 = true, key0 = true;

var focus_node = null, highlight_node = null;
var text_center = false;
var outline = false;
var min_score = 0;
var max_score = 1;

var color = d3.scaleLinear()
    .domain([min_score, (min_score + max_score) / 2, max_score])
    .range(["gray", "purple", "red"]);

var highlight_color = "#808080";
var highlight_trans = 0.1;

var default_node_color = "#ccc";
var default_link_color = "#888";
var nominal_base_node_size = 8;
var nominal_text_size = 15;
var max_text_size = 36;
var nominal_stroke = 1.5;
var max_stroke = 4.5;
var min_zoom = 0.1;
var max_zoom = 7;
var current_zoom_scale = 1;

var tocolor = "fill";
var towhite = "stroke";
if (outline) {
    tocolor = "stroke";
    towhite = "fill";
}

var svg = d3.select("#svg").append("svg");
var defs = svg.append("svg:defs");
var g = svg.append("g");
svg.style("cursor", "move");

var textBgFilter = defs.append("filter")
    .attr("id", "text-bg")
    .attr("x", "-4%").attr("y", "-30%")
    .attr("width", "108%").attr("height", "160%");
textBgFilter.append("feMorphology")
    .attr("in", "SourceAlpha").attr("operator", "dilate")
    .attr("radius", "5").attr("result", "expanded");
textBgFilter.append("feFlood")
    .attr("flood-color", "white").attr("flood-opacity", "0.75")
    .attr("result", "white");
textBgFilter.append("feComposite")
    .attr("in", "white").attr("in2", "expanded")
    .attr("operator", "in").attr("result", "bg");
var feMerge = textBgFilter.append("feMerge");
feMerge.append("feMergeNode").attr("in", "bg");
feMerge.append("feMergeNode").attr("in", "SourceGraphic");

defs.append("svg:marker")
    .attr("id", "arrow")
    .attr("markerHeight", 20)
    .attr("markerWidth", 20)
    .attr("orient", "auto")
    .attr("refX", 30)
    .attr("refY", 0)
    .attr("viewBox", "0 -5 10 10")
    .append("svg:path")
    .attr("d", "M0,-2 V2 L2,0 Z")
    .attr("fill", "#000000");

d3.json(network_path).then(function(graph) {

    var linkedByIndex = {};

    // Spread nodes across the viewport before simulation starts so they
    // don't all collapse from (0,0) before collision forces can act.
    graph.nodes.forEach(function(d) {
        d.x = (Math.random() - 0.5) * w + w / 2;
        d.y = (Math.random() - 0.5) * h + h / 2;
    });

    var simulation = d3.forceSimulation(graph.nodes)
        .force("link", d3.forceLink(graph.links)
            .distance(250)
            .strength(0.3))
        .force("charge", d3.forceManyBody()
            .strength(-5000))
        .force("collide", d3.forceCollide()
            .radius(function(d) { return Math.sqrt(d.size * 500) / 2 + 10; })
            .strength(1)
            .iterations(5))
        .force("x", d3.forceX(w / 2).strength(0.02))
        .force("y", d3.forceY(h / 2).strength(0.02))
        .alphaDecay(0.008);

    // forceLink has already resolved source/target to node objects
    graph.links.forEach(function(d) {
        linkedByIndex[d.source.index + "," + d.target.index] = true;
    });

    function isConnected(a, b) {
        return linkedByIndex[a.index + "," + b.index] || linkedByIndex[b.index + "," + a.index] || a.index == b.index;
    }

    function hasConnections(a) {
        for (var property in linkedByIndex) {
            var s = property.split(",");
            if ((s[0] == a.index || s[1] == a.index) && linkedByIndex[property])
                return true;
        }
        return false;
    }

    var link = g.selectAll(".link")
        .data(graph.links)
        .enter().append("line")
        .attr("class", "link")
        .attr("marker-end", "url(#arrow)")
        .style("stroke-width", nominal_stroke)
        .style("stroke-dasharray", function(d) {
            return (d.type === 'can_use' || d.type === 'can_provide') ? '6,3' : null;
        })
        .style("stroke", function(d) {
            if (isNumber(d.score) && d.score >= 0) return color(d.score);
            else return default_link_color;
        });

    var drag = d3.drag()
        .on("start", function(d) {
            d3.event.sourceEvent.stopPropagation();
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        })
        .on("drag", function(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        })
        .on("end", function(d) {
            if (!d3.event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        });

    var node = g.selectAll(".node")
        .data(graph.nodes)
        .enter().append("g")
        .attr("class", "node")
        .call(drag);

    node.on("dblclick.zoom", function(d) {
        d3.event.stopPropagation();
        var tx = w / 2 - d.x * current_zoom_scale;
        var ty = h / 2 - d.y * current_zoom_scale;
        svg.transition().duration(500)
            .call(zoom.transform, d3.zoomIdentity.translate(tx, ty).scale(current_zoom_scale));
    });

    // Transparent circle sized to the icon, used for hit-testing and highlight ring
    var circle = node.append("circle")
        .attr("r", function(d) { return Math.sqrt(d.size * 500) / 2; })
        .style("fill-opacity", 0)
        .style("stroke-width", nominal_stroke)
        .style(towhite, "none");

    var images = node.append("svg:image")
        .attr("xlink:href", function(d) { return "/images/icons/" + d.type + ".png"; })
        .attr("x", function(d) { return -Math.sqrt(d.size * 500) / 2; })
        .attr("y", function(d) { return -Math.sqrt(d.size * 500) / 2; })
        .attr("width", function(d) { return Math.sqrt(d.size * 500); })
        .attr("height", function(d) { return Math.sqrt(d.size * 500); });

    var text = g.selectAll(".text")
        .data(graph.nodes)
        .enter().append("text")
        .attr("dy", ".35em")
        .style("font-size", nominal_text_size + "px")
        .style("filter", "url(#text-bg)")
        .attr("dx", function(d) { return Math.sqrt(d.size * 500) / 2; })
        .text(function(d) { return ' ' + d.name + ' '; });

    text.append('tspan')
        .append("a")
        .on("mouseover", function(d) {
            d3.select(this).style("fill", "blue").style("font-weight", "bold").style("text-decoration", "underline").style("cursor", "pointer");
        })
        .on("mouseout", function(d) {
            d3.select(this).style("fill", "").style("font-weight", "").style("text-decoration", "");
        })
        .attr("xlink:href", function(d) { return "/help/main/programs/" + d.name; })
        .attr("target", "_blank")
        .html(function(d) { return (d.type == 'PROGRAM') ? '[i]' : ''; });

    node
        .on("mouseover", function(d) { set_highlight(d); })
        .on("mouseout", function(d) { exit_highlight(); })
        .on("click", function(d) {
            d3.event.stopPropagation();
            if (focus_node === d) {
                // Second click on same node clears focus
                focus_node = null;
                circle.style("opacity", 1);
                images.style("opacity", 1);
                text.style("opacity", 1);
                link.style("opacity", 1);
                exit_highlight();
            } else {
                focus_node = d;
                set_focus(d);
                set_highlight(d);
            }
        });

    // Click on background clears focus
    svg.on("click", function() {
        if (focus_node !== null) {
            focus_node = null;
            circle.style("opacity", 1);
            images.style("opacity", 1);
            text.style("opacity", 1);
            link.style("opacity", 1);
            exit_highlight();
        }
    });

    function exit_highlight() {
        if (focus_node !== null) {
            // A node is focused — keep its visual state, just clear hover highlight
            highlight_node = focus_node;
            return;
        }
        highlight_node = null;
        svg.style("cursor", "move");
        if (highlight_color != "white") {
            circle.style(towhite, "none");
            text.style("font-weight", "normal");
            link.style("stroke", function(o) {
                return (isNumber(o.score) && o.score >= 0) ? color(o.score) : default_link_color;
            });
        }
    }

    function set_focus(d) {
        if (highlight_trans < 1) {
            circle.style("opacity", function(o) {
                return isConnected(d, o) ? 1 : highlight_trans;
            });
            images.style("opacity", function(o) {
                return isConnected(d, o) ? 1 : highlight_trans;
            });
            text.style("opacity", function(o) {
                return isConnected(d, o) ? 1 : highlight_trans;
            });
            link.style("opacity", function(o) {
                return o.source.index == d.index || o.target.index == d.index ? 1 : highlight_trans;
            });
        }
    }

    function set_highlight(d) {
        svg.style("cursor", "pointer");
        if (focus_node !== null) d = focus_node;
        highlight_node = d;
        if (highlight_color != "white") {
            text.style("font-weight", function(o) {
                return isConnected(d, o) ? "bold" : "normal";
            });
            link.style("stroke", function(o) {
                if (o.source.index == d.index || o.target.index == d.index)
                    return get_link_color(o.type);
                return default_link_color;
            });
        }
    }

    var zoom = d3.zoom()
        .scaleExtent([min_zoom, max_zoom])
        .on("zoom", function() {
            var t = d3.event.transform;
            current_zoom_scale = t.k;

            var stroke = nominal_stroke;
            if (nominal_stroke * t.k > max_stroke) stroke = max_stroke / t.k;
            link.style("stroke-width", stroke);
            circle.style("stroke-width", stroke);

            var text_size = nominal_text_size;
            if (nominal_text_size * t.k > max_text_size) text_size = max_text_size / t.k;
            text.style("font-size", text_size + "px");

            g.attr("transform", t);
        });

    svg.call(zoom).on("dblclick.zoom", null);

    resize();
    d3.select(window).on("resize", resize).on("keydown", keydown);

    simulation.on("tick", function() {
        node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
        text.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
        link
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });
    });

    function resize() {
        svg.attr("width", innerWidth).attr("height", innerHeight);
        simulation
            .force("center", d3.forceCenter(innerWidth / 2, innerHeight / 2))
            .force("x", d3.forceX(innerWidth / 2).strength(0.04))
            .force("y", d3.forceY(innerHeight / 2).strength(0.04))
            .restart();
        w = innerWidth;
        h = innerHeight;
    }

    function keydown() {
        if (d3.event.keyCode == 32) {
            simulation.stop();
        } else if (d3.event.keyCode >= 48 && d3.event.keyCode <= 90 && !d3.event.ctrlKey && !d3.event.altKey && !d3.event.metaKey) {
            switch (String.fromCharCode(d3.event.keyCode)) {
                case "C": keyc = !keyc; break;
                case "S": keys = !keys; break;
                case "T": keyt = !keyt; break;
                case "R": keyr = !keyr; break;
                case "X": keyx = !keyx; break;
                case "D": keyd = !keyd; break;
                case "L": keyl = !keyl; break;
                case "M": keym = !keym; break;
                case "H": keyh = !keyh; break;
                case "1": key1 = !key1; break;
                case "2": key2 = !key2; break;
                case "3": key3 = !key3; break;
                case "0": key0 = !key0; break;
            }

            link.style("display", function(d) {
                var flag = vis_by_type(d.source.type) &&
                    vis_by_type(d.target.type) &&
                    vis_by_node_score(d.source.score) &&
                    vis_by_node_score(d.target.score) &&
                    vis_by_link_score(d.score);
                linkedByIndex[d.source.index + "," + d.target.index] = flag;
                return flag ? "inline" : "none";
            });

            node.style("display", function(d) {
                return (key0 || hasConnections(d)) && vis_by_type(d.type) && vis_by_node_score(d.score) ? "inline" : "none";
            });

            text.style("display", function(d) {
                return (key0 || hasConnections(d)) && vis_by_type(d.type) && vis_by_node_score(d.score) ? "inline" : "none";
            });

            if (highlight_node !== null) {
                if ((key0 || hasConnections(highlight_node)) && vis_by_type(highlight_node.type) && vis_by_node_score(highlight_node.score)) {
                    if (focus_node !== null) set_focus(focus_node);
                    set_highlight(highlight_node);
                } else {
                    exit_highlight();
                }
            }
        }
    }

});

function vis_by_type(type) {
    switch (type) {
        case "circle": return keyc;
        case "square": return keys;
        case "triangle-up": return keyt;
        case "diamond": return keyr;
        case "cross": return keyx;
        case "triangle-down": return keyd;
        default: return true;
    }
}

function vis_by_node_score(score) {
    if (isNumber(score)) {
        if (score >= 0.666) return keyh;
        else if (score >= 0.333) return keym;
        else if (score >= 0) return keyl;
    }
    return true;
}

function vis_by_link_score(score) {
    if (isNumber(score)) {
        if (score >= 0.666) return key3;
        else if (score >= 0.333) return key2;
        else if (score >= 0) return key1;
    }
    return true;
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function get_link_color(type) {
    if (type === 'provides') return '#00AA00';
    if (type === 'can_provide') return '#55BB55';
    if (type === 'requires') return '#AA0000';
    if (type === 'can_use') return '#BB5555';
    return default_link_color;
}
