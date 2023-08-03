var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6",
        "ok": "6",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "28",
        "ok": "28",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1123",
        "ok": "1123",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "383",
        "ok": "383",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "472",
        "ok": "472",
        "ko": "-"
    },
    "percentiles1": {
        "total": "74",
        "ok": "74",
        "ko": "-"
    },
    "percentiles2": {
        "total": "756",
        "ok": "756",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1085",
        "ok": "1085",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1115",
        "ok": "1115",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 67
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 33
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    }
},
contents: {
"req_go-to-home-page-75429": {
        type: "REQUEST",
        name: "Go To Home Page",
path: "Go To Home Page",
pathFormatted: "req_go-to-home-page-75429",
stats: {
    "name": "Go To Home Page",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "118",
        "ok": "118",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1123",
        "ok": "1123",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "737",
        "ok": "737",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "442",
        "ok": "442",
        "ko": "-"
    },
    "percentiles1": {
        "total": "969",
        "ok": "969",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1046",
        "ok": "1046",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1108",
        "ok": "1108",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1120",
        "ok": "1120",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 33
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 67
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
}
    },"req_go-to-home-page-c0dff": {
        type: "REQUEST",
        name: "Go To Home Page Redirect 1",
path: "Go To Home Page Redirect 1",
pathFormatted: "req_go-to-home-page-c0dff",
stats: {
    "name": "Go To Home Page Redirect 1",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "28",
        "ok": "28",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "30",
        "ok": "30",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "29",
        "ok": "29",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "percentiles1": {
        "total": "28",
        "ok": "28",
        "ko": "-"
    },
    "percentiles2": {
        "total": "29",
        "ok": "29",
        "ko": "-"
    },
    "percentiles3": {
        "total": "30",
        "ok": "30",
        "ko": "-"
    },
    "percentiles4": {
        "total": "30",
        "ok": "30",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
