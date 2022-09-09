# README

A chrome extension for saving you from dropping tables in production, inspired by and building on <https://www.charon.org/extension.html>.

Right now this has to be sideloaded into chrome from source.

To use:

1. Install the scripts as per the manifest.

2. Put your data into data.json as below

3. Load into chrome extensions

``` jsonc
{
        "name": "account name",
        "code": "environment identifier",
        "colour": "#194f46"
    },
    {
        "name": "account name",
        "code": "environment identifier",
        "colour": "#9b870c"
    },
    {
        "name": "account name",
        "code": "environment identifier",
        "colour": "#CC5500"
    },
    {
        "name": "account name",
        "code": "environment identifier",
        // danger colour for e.g. production
        "colour": "#ff0800"
    }

```
