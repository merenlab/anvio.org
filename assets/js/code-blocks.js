// Add copy buttons to code blocks
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('pre').forEach(function (pre) {
    // Skip if no code inside
    var code = pre.querySelector('code');
    if (!code) return;

    // Skip copy button for plain text and untagged code blocks
    var wrapper = pre.closest('[class*="language-"]');
    if (!wrapper || /language-(text|plaintext)/.test(wrapper.className)) return;

    // Add copy button
    var btn = document.createElement('button');
    btn.className = 'code-copy-btn';
    btn.setAttribute('aria-label', 'Copy code');
    btn.textContent = 'Copy';
    btn.addEventListener('click', function () {
      var text = code.textContent;
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = 'Copied!';
        setTimeout(function () { btn.textContent = 'Copy'; }, 1500);
      });
    });
    pre.appendChild(btn);
  });
});
