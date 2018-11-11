var app = angular.module('reportingApp', []);

app.controller('ScreenshotReportController', function ($scope) {
    $scope.searchSettings = {
        description: '',
        passed: true,
        failed: true,
        pending: true,
        withLog: true,
    };

    $scope.inlineScreenshots = false;
    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        $scope.searchSettings.passed = true;
        $scope.searchSettings.failed = true;
        $scope.searchSettings.pending = true;
        $scope.searchSettings.withLog = true;
    };

    this.getParent = function (str) {
        var arr = str.split('|');
        str = "";
        for (var i = arr.length - 2; i > 0; i--) {
            str += arr[i] + " > ";
        }
        return str.slice(0, -3);
    };

    this.specLevel = function (str) {
        var arr = str.split('|');
        str = "";
        if (arr.length < 3) {
            return true;
        }
        return false;
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };


    this.getShortDescription = function (str) {
        return str.split('|')[0];
    };


    this.nToBr = function (str) {
        return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };


    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh == 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number)/1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {passCount++};
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {pendingCount++};
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {failCount++}
        }
        return failCount;
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };


    var results =[
    {
        "description": "launch and enter value in Bankmanager|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10884,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "003a002c-0009-001a-0098-00250094002a.png",
        "timestamp": 1541788360423,
        "duration": 1582
    },
    {
        "description": "click on Bank manager Login button|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10884,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "004d00dc-0067-0085-0085-00a4007c001b.png",
        "timestamp": 1541788362303,
        "duration": 124
    },
    {
        "description": "Click on Add customer button|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10884,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00c800c0-00d7-000e-00c0-002800100086.png",
        "timestamp": 1541788362699,
        "duration": 103
    },
    {
        "description": "enter the first name value|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10884,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00d6000a-00bb-0030-006a-0026005200b9.png",
        "timestamp": 1541788363344,
        "duration": 177
    },
    {
        "description": "enter the last name value|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10884,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00e80074-0039-006b-00d2-0082004900f2.png",
        "timestamp": 1541788363878,
        "duration": 106
    },
    {
        "description": "enter the Postal code value|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10884,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00950017-0044-009a-002f-006f007000ee.png",
        "timestamp": 1541788364278,
        "duration": 125
    },
    {
        "description": "Click on add customer button|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10884,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00e80026-0050-00fa-007c-00160026004d.png",
        "timestamp": 1541788364677,
        "duration": 140
    },
    {
        "description": "launch and enter value in Bankmanager|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17016,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00d100e2-00f3-0092-0050-00b5008700e2.png",
        "timestamp": 1541797817845,
        "duration": 1549
    },
    {
        "description": "click on Bank manager Login button|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17016,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00180061-00d4-004d-0053-005600fa0042.png",
        "timestamp": 1541797819759,
        "duration": 112
    },
    {
        "description": "Click on Add customer button|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17016,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "004a00c5-00ab-00d3-005e-00b800350012.png",
        "timestamp": 1541797820182,
        "duration": 129
    },
    {
        "description": "enter the first name value|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17016,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00c9003c-00d1-0053-00e6-0043006b0020.png",
        "timestamp": 1541797820721,
        "duration": 163
    },
    {
        "description": "enter the last name value|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17016,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00bf0063-00c7-0000-007c-0003002700a5.png",
        "timestamp": 1541797821308,
        "duration": 118
    },
    {
        "description": "enter the Postal code value|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17016,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "000d00c6-001a-00e1-00c6-0001007000e0.png",
        "timestamp": 1541797821744,
        "duration": 118
    },
    {
        "description": "Click on add customer button|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 17016,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ce0075-0004-0025-0034-00ca005d000a.png",
        "timestamp": 1541797822159,
        "duration": 149
    },
    {
        "description": "launch and enter value in Bankmanager|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 19580,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00180024-00c5-00a8-0075-005200c700ba.png",
        "timestamp": 1541801017875,
        "duration": 1161
    },
    {
        "description": "click on Bank manager Login button|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 19580,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "001e008f-00ee-00cc-004a-007200e40011.png",
        "timestamp": 1541801019391,
        "duration": 113
    },
    {
        "description": "Click on Add customer button|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 19580,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "007600b7-00c0-0016-00d9-002300100079.png",
        "timestamp": 1541801019796,
        "duration": 279
    },
    {
        "description": "enter the first name value|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 19580,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "005d005f-00db-00f2-0014-00c000ab00b8.png",
        "timestamp": 1541801020421,
        "duration": 176
    },
    {
        "description": "enter the last name value|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 19580,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00dc000e-00ad-00e0-00cc-007e00d6005e.png",
        "timestamp": 1541801020948,
        "duration": 155
    },
    {
        "description": "enter the Postal code value|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 19580,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "002f0075-000d-0070-007a-003900ab008a.png",
        "timestamp": 1541801021433,
        "duration": 119
    },
    {
        "description": "Click on add customer button|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 19580,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00160070-00a1-0024-0021-00b6000900d8.png",
        "timestamp": 1541801021831,
        "duration": 126
    },
    {
        "description": "launch and enter value in Bankmanager|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18888,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "003c0052-00a0-00d3-0098-00f7003700e7.png",
        "timestamp": 1541891462390,
        "duration": 2891
    },
    {
        "description": "click on Bank manager Login button|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18888,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ab00fb-0025-0067-007a-0081008800e4.png",
        "timestamp": 1541891465831,
        "duration": 200
    },
    {
        "description": "Click on Add customer button|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18888,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "008200d5-0024-0005-00dc-00830054004d.png",
        "timestamp": 1541891466351,
        "duration": 99
    },
    {
        "description": "enter the first name value|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18888,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "009f002f-0086-0036-00da-00f400c6006e.png",
        "timestamp": 1541891466748,
        "duration": 168
    },
    {
        "description": "enter the last name value|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18888,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "004000ba-00a9-0001-00d3-00bd000600fa.png",
        "timestamp": 1541891467321,
        "duration": 106
    },
    {
        "description": "enter the Postal code value|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18888,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "007800d8-00c4-0084-0003-008100ce00bc.png",
        "timestamp": 1541891467923,
        "duration": 131
    },
    {
        "description": "Click on add customer button|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 18888,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "006c004a-0092-0022-0076-00a4007e000a.png",
        "timestamp": 1541891468423,
        "duration": 192
    },
    {
        "description": "launch and enter value in Bankmanager|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 20096,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0002001c-00c0-0095-003a-00ea00dc00b4.png",
        "timestamp": 1541891843325,
        "duration": 2640
    },
    {
        "description": "click on Bank manager Login button|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 20096,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "003a0028-00ed-0039-0082-006e006f0086.png",
        "timestamp": 1541891846318,
        "duration": 326
    },
    {
        "description": "Click on Add customer button|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 20096,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "007a00ef-0033-0051-00d1-006200fc00fd.png",
        "timestamp": 1541891846938,
        "duration": 99
    },
    {
        "description": "enter the first name value|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 20096,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0077005b-0000-0095-009c-004d001000c4.png",
        "timestamp": 1541891847348,
        "duration": 187
    },
    {
        "description": "enter the last name value|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 20096,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "002a00aa-0064-00c4-00ba-002000f20043.png",
        "timestamp": 1541891847918,
        "duration": 118
    },
    {
        "description": "enter the Postal code value|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 20096,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00680061-003e-0020-00b3-00c200a60026.png",
        "timestamp": 1541891848335,
        "duration": 118
    },
    {
        "description": "Click on add customer button|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 20096,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00f500c9-009e-00fc-0030-004500cb00e2.png",
        "timestamp": 1541891848736,
        "duration": 113
    },
    {
        "description": "launch and enter value in Bankmanager|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 13072,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00980042-006a-00ec-007a-00ea005000ef.png",
        "timestamp": 1541968375168,
        "duration": 3271
    },
    {
        "description": "click on Bank manager Login button|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 13072,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00bb00ae-0000-0022-00af-0097009400b1.png",
        "timestamp": 1541968378716,
        "duration": 418
    },
    {
        "description": "Click on Add customer button|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 13072,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00de00a4-0093-00f9-0099-00db006600cf.png",
        "timestamp": 1541968379421,
        "duration": 94
    },
    {
        "description": "enter the first name value|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 13072,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "008f008a-00ee-00fa-0013-008e004f00fd.png",
        "timestamp": 1541968379785,
        "duration": 177
    },
    {
        "description": "enter the last name value|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 13072,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00560096-00ea-00b4-0080-004e00ec00e7.png",
        "timestamp": 1541968380283,
        "duration": 103
    },
    {
        "description": "enter the Postal code value|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 13072,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00b6004a-006e-00ed-00cd-00e7004e0072.png",
        "timestamp": 1541968380680,
        "duration": 92
    },
    {
        "description": "Click on add customer button|Bankmanager Testing",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 13072,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "007e0009-0088-00d2-0006-0097002b005d.png",
        "timestamp": 1541968381056,
        "duration": 113
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.sortSpecs();
});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            countLogMessages(item);

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                }

            }
        }

        return filtered;
    };
});

var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
        return;
    }

    if (getSpec(item.description) != getSpec(prevItem.description)) {
        item.displaySpecName = true;
        return;
    }
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length-1];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};