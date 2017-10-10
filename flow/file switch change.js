[
    {
        "id": "34e819be.56b736",
        "type": "inject",
        "z": "cf4304cf.19d9a8",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": true,
        "x": 110,
        "y": 240,
        "wires": [
            [
                "82b8363.77b9ac8"
            ]
        ]
    },
    {
        "id": "3be0d3c1.5ddbbc",
        "type": "inject",
        "z": "cf4304cf.19d9a8",
        "name": "",
        "topic": "MAN",
        "payload": "",
        "payloadType": "date",
        "repeat": "5",
        "crontab": "",
        "once": false,
        "x": 130,
        "y": 140,
        "wires": [
            [
                "6ca90a49.1b4cb4",
                "2de7b747.1d3e28"
            ]
        ]
    },
    {
        "id": "6ca90a49.1b4cb4",
        "type": "switch",
        "z": "cf4304cf.19d9a8",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "0",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "1",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "outputs": 2,
        "x": 350,
        "y": 200,
        "wires": [
            [
                "836ceb1c.3f8a88"
            ],
            [
                "910c80b6.8bd13"
            ]
        ]
    },
    {
        "id": "1a7a4180.21eaaf",
        "type": "file in",
        "z": "cf4304cf.19d9a8",
        "name": "",
        "filename": "",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "x": 630,
        "y": 200,
        "wires": [
            []
        ]
    },
    {
        "id": "836ceb1c.3f8a88",
        "type": "change",
        "z": "cf4304cf.19d9a8",
        "name": "led-on",
        "rules": [
            {
                "t": "set",
                "p": "filename",
                "pt": "msg",
                "to": "/home/pi/led-on.png",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 490,
        "y": 200,
        "wires": [
            [
                "1a7a4180.21eaaf"
            ]
        ]
    },
    {
        "id": "910c80b6.8bd13",
        "type": "change",
        "z": "cf4304cf.19d9a8",
        "name": "led-off",
        "rules": [
            {
                "t": "set",
                "p": "filename",
                "pt": "msg",
                "to": "/home/pi/led-off.png",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 490,
        "y": 240,
        "wires": [
            [
                "1a7a4180.21eaaf"
            ]
        ]
    },
    {
        "id": "2de7b747.1d3e28",
        "type": "file",
        "z": "cf4304cf.19d9a8",
        "name": "",
        "filename": "data.txt",
        "appendNewline": false,
        "createDir": false,
        "overwriteFile": "true",
        "x": 360,
        "y": 140,
        "wires": []
    },
    {
        "id": "82b8363.77b9ac8",
        "type": "file in",
        "z": "cf4304cf.19d9a8",
        "name": "",
        "filename": "data.txt",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "x": 160,
        "y": 200,
        "wires": [
            [
                "6ca90a49.1b4cb4"
            ]
        ]
    }
]
