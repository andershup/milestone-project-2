{"filter":false,"title":"sendEmail.js","tooltip":"/assets/js/sendEmail.js","undoManager":{"mark":37,"position":37,"stack":[[{"start":{"row":0,"column":0},"end":{"row":15,"column":1},"action":"insert","lines":["function sendMail(contactForm) {","    emailjs.send(\"gmail\", \"example\", {","        \"from_name\": contactForm.name.value,","        \"from_email\": contactForm.emailaddress.value,","        \"project_request\": contactForm.projectsummary.value","    })","    .then(","        function(response) {","            console.log(\"SUCCESS\", response);","        },","        function(error) {","            console.log(\"FAILED\", error);","        }","    );","    return false;  // To block from loading a new page","}"],"id":1}],[{"start":{"row":14,"column":4},"end":{"row":14,"column":7},"action":"insert","lines":["// "],"id":2}],[{"start":{"row":14,"column":4},"end":{"row":14,"column":7},"action":"remove","lines":["// "],"id":3}],[{"start":{"row":14,"column":4},"end":{"row":14,"column":7},"action":"insert","lines":["// "],"id":5}],[{"start":{"row":8,"column":45},"end":{"row":9,"column":0},"action":"insert","lines":["",""],"id":6},{"start":{"row":9,"column":0},"end":{"row":9,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":9,"column":12},"end":{"row":9,"column":54},"action":"insert","lines":["document.getElementById(\"myForm\").reset();"],"id":7}],[{"start":{"row":9,"column":54},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":8},{"start":{"row":10,"column":0},"end":{"row":10,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":10,"column":12},"end":{"row":10,"column":54},"action":"insert","lines":["document.getElementById(\"myForm\").reset();"],"id":9}],[{"start":{"row":10,"column":54},"end":{"row":10,"column":96},"action":"insert","lines":["document.getElementById(\"myForm\").reset();"],"id":10}],[{"start":{"row":10,"column":96},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":11},{"start":{"row":11,"column":0},"end":{"row":11,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":10,"column":54},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":12},{"start":{"row":11,"column":0},"end":{"row":11,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":9,"column":37},"end":{"row":9,"column":43},"action":"remove","lines":["myForm"],"id":13},{"start":{"row":9,"column":37},"end":{"row":9,"column":38},"action":"insert","lines":["f"]},{"start":{"row":9,"column":38},"end":{"row":9,"column":39},"action":"insert","lines":["u"]},{"start":{"row":9,"column":39},"end":{"row":9,"column":40},"action":"insert","lines":["l"]},{"start":{"row":9,"column":40},"end":{"row":9,"column":41},"action":"insert","lines":["l"]},{"start":{"row":9,"column":41},"end":{"row":9,"column":42},"action":"insert","lines":["n"]},{"start":{"row":9,"column":42},"end":{"row":9,"column":43},"action":"insert","lines":["a"]},{"start":{"row":9,"column":43},"end":{"row":9,"column":44},"action":"insert","lines":["m"]}],[{"start":{"row":9,"column":44},"end":{"row":9,"column":45},"action":"insert","lines":["e"],"id":14}],[{"start":{"row":9,"column":48},"end":{"row":9,"column":55},"action":"remove","lines":["reset()"],"id":15}],[{"start":{"row":9,"column":48},"end":{"row":9,"column":49},"action":"insert","lines":["v"],"id":16},{"start":{"row":9,"column":49},"end":{"row":9,"column":50},"action":"insert","lines":["a"]},{"start":{"row":9,"column":50},"end":{"row":9,"column":51},"action":"insert","lines":["l"]},{"start":{"row":9,"column":51},"end":{"row":9,"column":52},"action":"insert","lines":["u"]},{"start":{"row":9,"column":52},"end":{"row":9,"column":53},"action":"insert","lines":["e"]}],[{"start":{"row":9,"column":53},"end":{"row":9,"column":54},"action":"insert","lines":["="],"id":17}],[{"start":{"row":9,"column":54},"end":{"row":9,"column":56},"action":"insert","lines":["\"\""],"id":18}],[{"start":{"row":9,"column":55},"end":{"row":9,"column":56},"action":"insert","lines":[" "],"id":19}],[{"start":{"row":10,"column":12},"end":{"row":10,"column":54},"action":"remove","lines":["document.getElementById(\"myForm\").reset();"],"id":20},{"start":{"row":10,"column":12},"end":{"row":10,"column":58},"action":"insert","lines":["document.getElementById(\"fullname\").value=\" \";"]}],[{"start":{"row":11,"column":11},"end":{"row":11,"column":54},"action":"remove","lines":[" document.getElementById(\"myForm\").reset();"],"id":21},{"start":{"row":11,"column":11},"end":{"row":11,"column":57},"action":"insert","lines":["document.getElementById(\"fullname\").value=\" \";"]}],[{"start":{"row":10,"column":37},"end":{"row":10,"column":45},"action":"remove","lines":["fullname"],"id":22},{"start":{"row":10,"column":37},"end":{"row":10,"column":38},"action":"insert","lines":["e"]},{"start":{"row":10,"column":38},"end":{"row":10,"column":39},"action":"insert","lines":["m"]},{"start":{"row":10,"column":39},"end":{"row":10,"column":40},"action":"insert","lines":["a"]},{"start":{"row":10,"column":40},"end":{"row":10,"column":41},"action":"insert","lines":["i"]},{"start":{"row":10,"column":41},"end":{"row":10,"column":42},"action":"insert","lines":["l"]}],[{"start":{"row":10,"column":37},"end":{"row":10,"column":42},"action":"remove","lines":["email"],"id":23},{"start":{"row":10,"column":37},"end":{"row":10,"column":49},"action":"insert","lines":["emailaddress"]}],[{"start":{"row":11,"column":36},"end":{"row":11,"column":44},"action":"remove","lines":["fullname"],"id":24},{"start":{"row":11,"column":36},"end":{"row":11,"column":50},"action":"insert","lines":["projectsummary"]}],[{"start":{"row":18,"column":4},"end":{"row":18,"column":7},"action":"remove","lines":["// "],"id":25}],[{"start":{"row":18,"column":4},"end":{"row":18,"column":7},"action":"insert","lines":["// "],"id":26}],[{"start":{"row":18,"column":4},"end":{"row":18,"column":7},"action":"remove","lines":["// "],"id":27}],[{"start":{"row":10,"column":8},"end":{"row":10,"column":11},"action":"insert","lines":["// "],"id":29},{"start":{"row":11,"column":8},"end":{"row":11,"column":10},"action":"insert","lines":["//"]}],[{"start":{"row":9,"column":12},"end":{"row":9,"column":15},"action":"insert","lines":["// "],"id":30}],[{"start":{"row":8,"column":45},"end":{"row":9,"column":0},"action":"insert","lines":["",""],"id":31},{"start":{"row":9,"column":0},"end":{"row":9,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":9,"column":12},"end":{"row":9,"column":54},"action":"insert","lines":["document.getElementById(\"fullname\").value="],"id":32}],[{"start":{"row":9,"column":37},"end":{"row":9,"column":45},"action":"remove","lines":["fullname"],"id":33},{"start":{"row":9,"column":37},"end":{"row":9,"column":38},"action":"insert","lines":["m"]},{"start":{"row":9,"column":38},"end":{"row":9,"column":39},"action":"insert","lines":["y"]},{"start":{"row":9,"column":39},"end":{"row":9,"column":40},"action":"insert","lines":["f"]},{"start":{"row":9,"column":40},"end":{"row":9,"column":41},"action":"insert","lines":["o"]},{"start":{"row":9,"column":41},"end":{"row":9,"column":42},"action":"insert","lines":["r"]},{"start":{"row":9,"column":42},"end":{"row":9,"column":43},"action":"insert","lines":["m"]}],[{"start":{"row":9,"column":46},"end":{"row":9,"column":51},"action":"remove","lines":["value"],"id":34},{"start":{"row":9,"column":46},"end":{"row":9,"column":47},"action":"insert","lines":["r"]},{"start":{"row":9,"column":47},"end":{"row":9,"column":48},"action":"insert","lines":["e"]},{"start":{"row":9,"column":48},"end":{"row":9,"column":49},"action":"insert","lines":["s"]},{"start":{"row":9,"column":49},"end":{"row":9,"column":50},"action":"insert","lines":["e"]},{"start":{"row":9,"column":50},"end":{"row":9,"column":51},"action":"insert","lines":["t"]},{"start":{"row":9,"column":51},"end":{"row":9,"column":52},"action":"insert","lines":["("]}],[{"start":{"row":9,"column":52},"end":{"row":9,"column":53},"action":"insert","lines":[")"],"id":35}],[{"start":{"row":9,"column":53},"end":{"row":9,"column":54},"action":"remove","lines":["="],"id":36}],[{"start":{"row":9,"column":53},"end":{"row":9,"column":54},"action":"insert","lines":[";"],"id":37}],[{"start":{"row":2,"column":8},"end":{"row":2,"column":12},"action":"insert","lines":["    "],"id":38},{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"insert","lines":["    "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":2},"action":"insert","lines":["  "]},{"start":{"row":4,"column":10},"end":{"row":4,"column":12},"action":"insert","lines":["  "]},{"start":{"row":5,"column":4},"end":{"row":5,"column":8},"action":"insert","lines":["    "]},{"start":{"row":6,"column":0},"end":{"row":6,"column":3},"action":"insert","lines":["   "]},{"start":{"row":6,"column":7},"end":{"row":6,"column":8},"action":"insert","lines":[" "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"insert","lines":[" "]},{"start":{"row":9,"column":13},"end":{"row":9,"column":16},"action":"insert","lines":["   "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"insert","lines":["    "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":2},"action":"insert","lines":["  "]},{"start":{"row":11,"column":10},"end":{"row":11,"column":16},"action":"insert","lines":["      "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"insert","lines":["    "]},{"start":{"row":12,"column":12},"end":{"row":12,"column":16},"action":"insert","lines":["    "]},{"start":{"row":13,"column":0},"end":{"row":14,"column":0},"action":"insert","lines":["",""]},{"start":{"row":14,"column":12},"end":{"row":14,"column":14},"action":"insert","lines":["},"]},{"start":{"row":15,"column":8},"end":{"row":16,"column":4},"action":"remove","lines":["},","    "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":4},"action":"insert","lines":["    "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":1},"action":"insert","lines":[" "]},{"start":{"row":17,"column":9},"end":{"row":17,"column":12},"action":"insert","lines":["   "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":4},"action":"insert","lines":["    "]},{"start":{"row":19,"column":17},"end":{"row":19,"column":18},"action":"remove","lines":[" "]},{"start":{"row":20,"column":1},"end":{"row":21,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":11,"column":18},"end":{"row":11,"column":22},"action":"remove","lines":["    "],"id":39}],[{"start":{"row":12,"column":20},"end":{"row":12,"column":21},"action":"remove","lines":[" "],"id":40},{"start":{"row":12,"column":19},"end":{"row":12,"column":20},"action":"remove","lines":[" "]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":12,"column":19},"end":{"row":12,"column":19},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":92,"mode":"ace/mode/javascript"}},"timestamp":1568831408810,"hash":"fbbebdf6353e12cfacf1e07aa2afe591aedf4f77"}