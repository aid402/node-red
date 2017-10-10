[
    {
        "id": "9c08ab4c.96af78",
        "type": "inject",
        "z": "d9c2e128.f06bd",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "1",
        "crontab": "",
        "once": false,
        "x": 110,
        "y": 140,
        "wires": [
            [
                "15e664b6.34bffb",
                "fdad02f2.aa977"
            ]
        ]
    },
    {
        "id": "4cde8264.86ea2c",
        "type": "ui_switch",
        "z": "d9c2e128.f06bd",
        "name": "Choice1",
        "label": "{{msg.label1}}",
        "group": "d3390420.783878",
        "order": 3,
        "width": 0,
        "height": 0,
        "passthru": true,
        "decouple": "false",
        "topic": "",
        "style": "",
        "onvalue": "true",
        "onvalueType": "bool",
        "onicon": "",
        "oncolor": "",
        "offvalue": "false",
        "offvalueType": "bool",
        "officon": "",
        "offcolor": "",
        "x": 340,
        "y": 320,
        "wires": [
            [
                "ea0011e0.0b7db"
            ]
        ]
    },
    {
        "id": "15e664b6.34bffb",
        "type": "function",
        "z": "d9c2e128.f06bd",
        "name": "thai Date",
        "func": "function thaiDate(date) {\n  var monthName = [\n    \"มกราคม\", \"กุมภาพันธ์\", \"มีนาคม\",\n    \"เมษายน\", \"พฤษภาคม\", \"มิถุนายน\", \"กรกฎาคม\",\n    \"สิงหาคม\", \"กันยายน\", \"ตุลาคม\",\n    \"พฤศจิกายน\", \"ธันวาคม\"\n  ];\n\n  var day = date.getDate();\n  var monthIndex = date.getMonth();\n  var year = date.getFullYear()+543;\n\n  return day + ' ' + monthName[monthIndex] + ' ' + year;\n}\n\nvar d = new Date(msg.payload);\nmsg.payload =thaiDate(d) + '  ' + d.toLocaleTimeString();\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 180,
        "y": 200,
        "wires": [
            [
                "e42bda43.e87bc8",
                "5ebab45e.35660c"
            ]
        ]
    },
    {
        "id": "e42bda43.e87bc8",
        "type": "ui_text",
        "z": "d9c2e128.f06bd",
        "group": "d3390420.783878",
        "order": 1,
        "width": 0,
        "height": 0,
        "name": "time",
        "label": "{{msg.payload}}",
        "format": "เลือกข้อมูลที่ต้องการแสดง",
        "layout": "col-center",
        "x": 330,
        "y": 240,
        "wires": []
    },
    {
        "id": "5ebab45e.35660c",
        "type": "debug",
        "z": "d9c2e128.f06bd",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "payload",
        "x": 350,
        "y": 200,
        "wires": []
    },
    {
        "id": "fdad02f2.aa977",
        "type": "function",
        "z": "d9c2e128.f06bd",
        "name": "set Label",
        "func": "msg.label1='Test Choice1';\nmsg.label2='Test Choice2';\nmsg.label3='Test Choice3';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 180,
        "y": 320,
        "wires": [
            [
                "4cde8264.86ea2c",
                "209db6f0.f58b8a",
                "fd60e7ac.bd7c88"
            ]
        ]
    },
    {
        "id": "209db6f0.f58b8a",
        "type": "ui_switch",
        "z": "d9c2e128.f06bd",
        "name": "Choice2",
        "label": "{{msg.label2}}",
        "group": "d3390420.783878",
        "order": 4,
        "width": 0,
        "height": 0,
        "passthru": true,
        "decouple": "false",
        "topic": "",
        "style": "",
        "onvalue": "true",
        "onvalueType": "bool",
        "onicon": "",
        "oncolor": "",
        "offvalue": "false",
        "offvalueType": "bool",
        "officon": "",
        "offcolor": "",
        "x": 340,
        "y": 360,
        "wires": [
            [
                "863cbf3f.45825"
            ]
        ]
    },
    {
        "id": "fd60e7ac.bd7c88",
        "type": "ui_switch",
        "z": "d9c2e128.f06bd",
        "name": "Choice3",
        "label": "{{msg.label3}}",
        "group": "d3390420.783878",
        "order": 5,
        "width": 0,
        "height": 0,
        "passthru": true,
        "decouple": "false",
        "topic": "",
        "style": "",
        "onvalue": "true",
        "onvalueType": "bool",
        "onicon": "",
        "oncolor": "",
        "offvalue": "false",
        "offvalueType": "bool",
        "officon": "",
        "offcolor": "",
        "x": 340,
        "y": 400,
        "wires": [
            [
                "a9cba421.7bf0c8"
            ]
        ]
    },
    {
        "id": "ea0011e0.0b7db",
        "type": "function",
        "z": "d9c2e128.f06bd",
        "name": "msg1",
        "func": "var msg1={};\nif (msg.payload===true) {\n    msg1.payload = Math.round(Math.random()*100);\n    msg1.topic = msg.label1;\nreturn msg1;\n}",
        "outputs": 1,
        "noerr": 0,
        "x": 490,
        "y": 320,
        "wires": [
            [
                "a898bf2.102944"
            ]
        ]
    },
    {
        "id": "863cbf3f.45825",
        "type": "function",
        "z": "d9c2e128.f06bd",
        "name": "msg2",
        "func": "var msg2={};\nif (msg.payload===true) {\n    msg2.payload = Math.round(Math.random()*100);\n    msg2.topic = msg.label2;\nreturn msg2;\n}",
        "outputs": 1,
        "noerr": 0,
        "x": 490,
        "y": 360,
        "wires": [
            [
                "a898bf2.102944"
            ]
        ]
    },
    {
        "id": "a9cba421.7bf0c8",
        "type": "function",
        "z": "d9c2e128.f06bd",
        "name": "msg3",
        "func": "var msg3={};\nif (msg.payload===true) {\n    msg3.payload = Math.round(Math.random()*100);\n    msg3.topic = msg.label3;\nreturn msg3;\n}",
        "outputs": 1,
        "noerr": 0,
        "x": 490,
        "y": 400,
        "wires": [
            [
                "a898bf2.102944"
            ]
        ]
    },
    {
        "id": "a898bf2.102944",
        "type": "ui_chart",
        "z": "d9c2e128.f06bd",
        "name": "",
        "group": "b22dd45f.08b3b8",
        "order": 0,
        "width": 0,
        "height": 0,
        "label": "chart",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "",
        "ymax": "",
        "removeOlder": "1",
        "removeOlderPoints": "",
        "removeOlderUnit": "60",
        "cutout": 0,
        "useOneColor": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "x": 650,
        "y": 360,
        "wires": [
            [],
            []
        ]
    },
    {
        "id": "71153c20.15c074",
        "type": "function",
        "z": "d9c2e128.f06bd",
        "name": "reset chart",
        "func": "msg.payload=[];\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 510,
        "y": 480,
        "wires": [
            [
                "a898bf2.102944"
            ]
        ]
    },
    {
        "id": "582816d8.0c9d78",
        "type": "ui_button",
        "z": "d9c2e128.f06bd",
        "name": "",
        "group": "d3390420.783878",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "reset chart",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 350,
        "y": 480,
        "wires": [
            [
                "71153c20.15c074"
            ]
        ]
    },
    {
        "id": "d3390420.783878",
        "type": "ui_group",
        "z": "",
        "name": "websocket-repl",
        "tab": "5fd3480f.5b1328",
        "order": 2,
        "disp": true,
        "width": "10"
    },
    {
        "id": "b22dd45f.08b3b8",
        "type": "ui_group",
        "z": "",
        "name": "Default",
        "tab": "cc84ff69.24d2b",
        "disp": true,
        "width": "6"
    },
    {
        "id": "5fd3480f.5b1328",
        "type": "ui_tab",
        "z": "",
        "name": "micropython-esp8266",
        "icon": "dashboard"
    },
    {
        "id": "cc84ff69.24d2b",
        "type": "ui_tab",
        "z": "",
        "name": "Home",
        "icon": "dashboard"
    }
]
