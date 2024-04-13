const traces =
    [
        {
            "target":
                "/build/_shared/chunk-TSGHAA3G.js",
            "traceId":
                "b30eff60bf922cf69e679d2542b6e4c6"
        },
        {
            "target":
                "/build/_shared/chunk-TSGHAA3G.js",
            "traceId":
                "b30eff60bf922cf69e679d2542b6e4c6"
        },
        {
            "target":
                "/student/courses/1?_data=routes%2Fstudent%2B%2Fcourses%2B%2F%24courseId%2B%2Findex",
            "traceId":
                "f72845b7dccb79ccc850cdc701193e2b"
        },
        {
            "traceId":
                "f72845b7dccb79ccc850cdc701193e2b"
        },
        {
            "traceId":
                "f72845b7dccb79ccc850cdc701193e2b"
        },
        {
            "traceId":
                "f72845b7dccb79ccc850cdc701193e2b"
        },
        {
            "target":
                "/build/routes/student+/courses+/$courseId+/index-B7KS4C5K.js",
            "traceId":
                "420a5424ca2a74b1c48494998d636707"
        },
        {
            "target":
                "/build/routes/student+/courses+/$courseId+/index-B7KS4C5K.js",
            "traceId":
                "420a5424ca2a74b1c48494998d636707"
        },
        {
            "target":
                "/api/enroll",
            "traceId":
                "e5e984f95354cdfc072f5f63a328dbee"
        },
        {
            "target":
                "/api/enroll",
            "traceId":
                "e5e984f95354cdfc072f5f63a328dbee"
        }
    ]



const groupByTraceId = (traces) => {
    return traces.reduce((acc, trace) => {
        if (!trace.target) return acc;
        if (!acc[trace.traceId]) {
            acc[trace.traceId] = [];
        }
        acc[trace.traceId].push(trace.target);
        return acc;
    }, {});
}  