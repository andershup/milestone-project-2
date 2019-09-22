
    <script>
        //     function initMap () {
        //         var map = new google.maps.Map(document.getElementById("map"), {
        //             zoom: 6,
        //             center: {
        //                 lat: 53.382790,
        //                 lng: -7.707616
        //             }
        //         });

        //         var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
        //         var locations = [{
        //             // Galway
        //             lat: 53.271361,
        //             lng: -9.056890
        //         }, {
        //             // Monaghan
        //             lat: 54.2457488,
        //             lng: -6.9885574
        //         }, {
        //             // Sligo
        //             lat: 54.2683987,
        //             lng: -8.4982825
        //         }];
        //         var markers = locations.map(function(location, i) {
        //             return new google.maps.Marker({
        //                 position: location,
        //                 label: labels[i % labels.length]
        //             });
        //         });
        //         var markerCluster = new MarkerClusterer(map, markers, {
        //             imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
        //         });
        //     }
        //
    </script>
    
           // var content = [
        //     ["<div>" +
        //         "<h3>Galway</h3>" +
        //         "<img src='#' width='150 ' height='100 ' alt=''>" +
        //         "<p></p>" +
        //         "<a href='#'></a>" +
        //         "</div>"
        //     ],
        //     ["<div>" +
        //         "<h3>Monaghan</h3>" +
        //         "<img src='#' width='150 ' height='100 ' alt=''>" +
        //         "<p></p>" +
        //         "<a href='#'></a>" +
        //         "</div>"
        //     ],
        //     ["<div>" +
        //         "<h3>Sligo</h3>" +
        //         "<img src='#' width='150 ' height='100 ' alt=''>" +
        //         "<p></p>" +
        //         "<a href='#'></a>" +
        //         "</div>"
        //     ],
        //     ["<div>" +
        //         "<h3>Killarney</h3>" +
        //         "<img src='#' width='150 ' height='100 ' alt=''>" +
        //         "<p></p>" +
        //         "<a href='#'></a>" +
        //         "</div>"
        //     ],
        //     ["<div>" +
        //         "<h3>Donegal</h3>" +
        //         "<img src='#' width='150 ' height='100 ' alt=''>" +
        //         "<p></p>" +
        //         "<a href='#'></a>" +
        //         "</div>"
        //     ],
        // ];
        
        
        
        
                var locations = [
            ["Druid Theatre Company - Mick Lally Theatre", 53.2709613, -9.0531041],
            ["Nora Barnacle's House", 53.2730267, -9.0546251],
            ["Thoor Ballylee Yeats Tower", 53.271361, -9.056890],
            ["Cathaoir Synge", 53.271361, -9.056890],
            ["Lake Isle of Innisfree", 54.2262853, -8.4756664],
            ["Benbulbin", 53.271361, -9.056890],
            ["Lissadell House", 53.271361, -9.056890],
            ["Yeats Building", 54.2457488, -6.9885574],
            ["Kerry Writers Museum", 52.4447289, -9.4862804],
            ["John B. Keane's Pub", 52.4470431, -9.4856969],
            ["Glenties Cemetery - Resting place of Playwright Brian Friel", 54.7866719, -8.2833222]
        ];

        var content = [
            ["<div>" +
                "<h3>Mick Lally Theatre - Druid Theatre Company</h3>" +
                "<p>Druid was founded in Galway in 1975 by Garry Hynes, Marie Mullen and Mick Lally, the first professional Irish theatre company outside of Dublin.</p>" +
                "<p>Over the years, Druid has worked with actors, designers, directors, writers, producers and administrators, many of whom have each gone on to play leading roles in Irish and international theatre and all of whom have contributed to the shape of the company. The core staff is based at our offices on Flood Street, Galway.</p>" +
                "<p><a class='btn btn-sm' href='www.druid.ie' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
                "</div>"
            ],
            ["<div>" +
                "<h3>Nora Barnacle's House</h3>" +
                "<p>This terrace house is located in Galway City opposite of St Nicholas Church. It was built in the late 1800s and was home to James Joyce’s wife, Nora Barnacle. Joyce also spent considerable time here when he was writing in the 20th century. The building has been restored, but it’s admittedly showing some signs of wear.</p>" +
                "<p>Joyce used the house and the tragic tale of Michael Feeney based a section the final short story in Dubliners,'The Dead'. Michael Feeney wason these incidents. Barnacle and Feeney fell in love as teenager before he of typhoid and pneumonia.</p>" +
                "<p><a class='btn btn-sm' href='http://www.irishtourist.com/details/nora-barnacle-house-museum.shtml' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
                "</div>"
            ],
            ["<div>" +
                "<h3>Thoor Ballylee Yeats Tower</h3>" +
                "<p>This urteenth century Hiberno-Norman toweris closely associated with the poet WB Yeats</p>" +
                "<p><a class='btn btn-sm' href='https://yeatsthoorballylee.org/visit/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
                "</div>"
            ],
            ["<div>" +
                "<h3>Cathaoir Synge</h3>" +
                "<p>Cathaoir Synge or 'Synge Chair' was a location used to write by the writer J.M. Synge who had a long association with the Aran Islands.  He lived on Inis Meáin for considerable time between 1898 and 1902 and drew inspiration from the island culture. Many of Synge most famous works, e.g. ‘Riders To The Sea’ and ‘The Playboy of The Western World were writtten at this spot.</p>" +
                "< p > <a class='btn btn-sm' href='http://www.aranislands.ie/cathaoir-synge/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a> < /p>" +
                "</div>"
            ],
            ["<div>" +
                "<h3>Lake Isle of Innisfree</h3>" +
                "<p>The Lake Isle of Innisfree a beautiful island just off the south coast of Lough Gill. It was the inspiration for the peom by WB Yeats of the same name.</p>" +
                "< p > <a class='btn btn-sm' href='https://sligotours.ie/locations/lake-isle-of-innisfree/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a> </p>" +
                "</div>"
            ],
            ["<div>" +
                "<h3>Ben bulbin</h3>" +
                "<p>Ben bulbin, sometimes spelled Benbulbin or Benbulben, is a large flat-topped rock formation in County Sligo, Ireland. It is part of the Dartry Mountains, in an area sometimes called 'Yeats Country'. Benbulbin is featured in WB Yeats peom 'Under Ben Bulben'.</p>" +
                "< p > <a class='btn btn-sm' href='https://sligowalks.ie/walks/benbulbin-gortarowey-looped-walk/' target='_blank'><span class='sr-only'>Walking Tour</span>Walking Tour</a> </p>" +
                "</div>"
            ],
            ["<div>" +
                "<h3>Lissadell House</h3>" +
                "<p>Lissadell House is a neo-classical Greek revivalist style country house located in County Silgo. </p>" +
                "<p>The house was a holiday retreat of WB Yeats who imortalised it with the opening lines of his poem: 'In Memory of Eva Gore-Booth and Con Markiewicz' </p>" +
                "< p > <a class='btn btn-sm' href='http://lissadellhouse.com/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a> </p>" +
                "</div>"
            ],
            ["<div>" +
                "<h3>Yeats Building - Yeats Society</h3>" +
                "<p>The Yeats Building is centrally located on Hyde Bridge, in Sligo Town Centre. This beautiful building is the home of the Yeats Society, Sligo since 1973.</p>" +
                "<p> <a class='btn btn-sm' href='https://www.yeatssociety.com/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a> </p>" +
                "</div>"
            ],
            ["<div>" +
                "<h3>Kerry Writers Museum</h3>" +
                "<p>Kerry Writers’ Museum collects, safeguards, holds in trust, displays and interprets a variety of material and objects relating to the rich literary heritage of County Kerry, and the cultural, social & political heritage of Listowel & North Kerry.</p>" +
                "<p> <a class='btn btn-sm' href='http://www.kerrywritersmuseum.com' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a> </p>" +
                "</div>"
            ],
            ["<div>" +
                "<h3>John B Keane's Pub</h3>" +
                "<p>This pub was previously owned and run by renowned playwrite John B Keane. At the counter, after closing time, Keane wrote his many masterpieces. The pub is now run by Keane's son Billy, who is also a writer and broadcaster.</p>" +
                "<p> <a class='btn btn-sm' href='http://www.gokerry.ie/businesses/john-b-keanes-bar/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a> </p>" +
                "</div>"
            ],
            ["<div>" +
                "<h3>Glenties Cemetery</h3>" +
                "<p>Resting place of Playwright Brian Friel</p>" +
                "</div>"
            ],
        ];
