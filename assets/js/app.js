// jQuery(function() {

// });

new LeaderLine(
    document.getElementById("quality"),
    document.getElementById("simplicity"),
    {
        color: '#F84100',
        // outline: true,
        size: 8,
        endPlug: "behind",
        // dash: {animation: true, len: 4, gap: 24}
    }
)

new LeaderLine(
    document.getElementById("simplicity"),
    document.getElementById("security"),
    {
        color: 'red',
        // outline: true,
        size: 8,
        endPlug: "behind",
        // dash: {animation: true, len: 4, gap: 24}
    }
)

new LeaderLine(
    document.getElementById("security"),
    document.getElementById("product"),
    {
        startPlugColor: '#F84100',
        endPlugColor: '#F9D213',
        gradient: true,
        // color: 'red',
        // outline: true,
        size: 8,
        endPlug: "behind",
        dash: {animation: true, len: 4, gap: 4},
        path: "grid",
        startSocket: 'bottom', 
        endSocket: 'right'
    }
)