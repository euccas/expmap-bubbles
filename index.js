/**
 * Created by euccas on 5/16/16.
 */

$(document).ready(function () {
    var bubbleChart = new d3.svg.BubbleChart({
        supportResponsive: true,
        //container: => use @default
        size: 760,
        //viewBoxSize: => use @default
        innerRadius: 760 / 5,
        //outerRadius: => use @default
        radiusMin: 50,
        //radiusMax: use @default
        //intersectDelta: use @default
        //intersectInc: use @default
        //circleColor: use @default
        data: {
            items: [
                {text: "Ruby", count: "308", url: "https://trello.com/b/MMWvebVQ/expmap-ruby"},
                {text: "Ruby on Rails", count: "236", url: "https://trello.com/b/zRsFupuv/expmap-rubyonrails"},
                {text: "Python", count: "310", url: "https://trello.com/b/Vx3x9inC/expmap-python"},
                {text: "AWS", count: "123", url: "https://trello.com/b/MMWvebVQ/expmap-aws"},
                {text: "Git", count: "12", url: "https://trello.com/b/EgdQxNKe/expmap-git"},
                {text: "PostgreSQL", count: "170", url: "https://trello.com/b/yeT2hGNa/expmap-postgresql"},
                {text: "C/C++", count: "37", url: "https://trello.com/b/ezIikiOC/expmap-c"},
                {text: "AngularJS", count: "46", url: "https://trello.com/b/jA3wHPMi/expmap-angularjs"},
                {text: "MongoDB", count: "170", url: "https://trello.com/b/JvGZz67w/expmap-mongodb"},
                {text: "Jenkins", count: "90", url: "https://trello.com/b/SeD2JvLZ/expmap-jenkins"},
                {text: "Linux", count: "100", url: "https://trello.com/b/xB1IMHSB/expmap-linux"},
                {text: "Perforce", count: "24", url: "https://trello.com/b/DWUc8Ltt/expmap-perforce"},
                {text: "jQuery", count: "89", url: "https://trello.com/b/yqxcJ5PL/expmap-jquery"},
                {text: "Chef", count: "35", url: "https://trello.com/b/jBLbKESv/expmap-chef"},
            ],
            eval: function (item) {return item.count;},
            classed: function (item) {return item.text.split(" ").join("");},
        },
        plugins: [
            {
                name: "central-click",
                options: {
                    text: "(See My Notes)",
                    textField: "url",
                    classed: {url: true},
                    style: {
                        "font-size": "24px",
                        "font-style": "italic",
                        "font-family": "Source Sans Pro, sans-serif",
                        //"font-weight": "700",
                        "text-anchor": "middle",
                        "text-decoration": "underline",
                        "fill": "white"
                    },
                    attr: {
                        dy: "65px",
                    },
                }
            },
            {
                name: "lines",
                options: {
                    format: [
                        {// Line #1
                            textField: "text",
                            classed: {text: true},
                            style: {
                                "font-size": "18px",
                                "font-weight": "600",
                                "font-family": "Source Sans Pro, sans-serif",
                                "text-anchor": "middle",
                                "fill": "white"
                            },
                            attr: {
                                dy: "6px",
                                x: function (d) {return d.cx;},
                                y: function (d) {return d.cy;}
                            }
                        }
                    ],
                    centralFormat: [
                        {// Line #0
                            style: {"font-size": "50px"},
                            attr: {}
                        },
                        {// Line #1
                            style: {"font-size": "50px"},
                            attr: {dy: "40px"}
                        }
                    ]
                }
            }]
    });
});