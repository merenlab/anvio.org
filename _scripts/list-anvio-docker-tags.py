import json
from urllib.request import urlopen

# shamelessly modified from https://stackoverflow.com/a/49361727
def format_bytes(size):
    power = 2 ** 10
    n = 0
    power_labels = {0 : '', 1: 'K', 2: 'M', 3: 'G', 4: 'T'}
    while size > power:
        size /= power
        n += 1
    return f"{size:.2f} {power_labels[n] + 'B'}"

tags = json.loads(urlopen('https://hub.docker.com/v2/repositories/meren/anvio/tags').read())

print("Container name\tDate\tSize")
for tag in tags['results']:
    print(f"{tag['name']}\t{'/'.join(tag['last_updated'].split('-')[0:2])}\t{format_bytes(tag['full_size'])}")
