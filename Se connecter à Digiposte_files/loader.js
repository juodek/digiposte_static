setTimeout(function () {
  var base_href = "https://ui.digibot-prod.probayes.net/";
  (function (manifest) {
    window.baseStyle =
      "position:fixed; right:20px; z-index:9999; height:99px; width:99px; border:none;";

    window.mobileOpenDimensions = "height: 100%; width: calc(100% - 11px);";
    window.normalClodedDimensions = "height: 130px; width: 210px;";
    window.normalOpenDimensions = "height: 580px; width: 340px;";

    window.normalBottom = "bottom: 4px;";
    window.mobileBottom = "bottom: 60px;";

    window.isMobile = false;
    window.isOpen = false;

    var frame = document.createElement("iframe");
    frame.id = "botframe";

    window.removeIframe = function () {
      document.body.removeChild(frame);
    };

    window.changeFrameDims = function () {
      var newDims;
      var newBottom = window.normalBottom;
      if (window.isMobile && window.isOpen) {
        newDims = window.mobileOpenDimensions;
      } else if (window.isMobile && !window.isOpen) {
        newDims = window.normalClodedDimensions;
      } else if (!window.isMobile && window.isOpen) {
        newDims = window.normalOpenDimensions;
      } else if (!window.isMobile && !window.isOpen) {
        newDims = window.normalClodedDimensions;
      }

      var newStyle = window.baseStyle + newDims + newBottom;
      console.log("new style: " + newStyle);

      if (window.botframe.style === undefined) {
        // if IE
        console.log("this is ie. Changing style");
        document.getElementById("botframe").style.cssText = newStyle;
      } else {
        // if not IE
        console.log("this is not ie. Changing style");
        window.botframe.style = newStyle;
      }
    };

    function setMobile() {
      var isSmall = window.innerWidth <= 600;
      var hasChanged = window.isMobile != isSmall;
      window.isMobile = isSmall;
      return hasChanged;
    }

    window.sendToFrame = function (data) {
      // add current url to sent data
      data["url"] = window.location.href;
      document.getElementById("botframe").contentWindow.postMessage(data, "*");
    };

    window.onresize = function () {
      if (setMobile()) {
        console.log("window changed dimensions");
        window.changeFrameDims();
        window.sendToFrame({
          eventId: "windowSize",
          screenWidth: window.isMobile ? "mobile" : "wide",
        });
      }
    };

    frame.onload = function () {
      var framedoc = this.contentWindow.document;
      fillFrame(framedoc);
      loadScripts(framedoc);
      // whether this is the test bot
      this.contentWindow["isSandbox"] = "";

      var eventMethod = window.addEventListener
        ? "addEventListener"
        : "attachEvent";
      var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
      // listener to messages from inside the iframe to outside
      var eventer = window[eventMethod];
      eventer(
        messageEvent,
        function (e) {
          console.log("received message:  ", e.data);

          // "getWindowSize" : send the window size
          if (e.data.eventId === "getWindowSize") {
            console.log("received getWindowSize event");
            sendToFrame({
              eventId: "windowSize",
              screenWidth: window.isMobile ? "mobile" : "wide",
            });
          }

          // "closeIframe" : close iframe
          else if (e.data.eventId === "closeIframe") {
            console.log("received closeIframe event");
            window.removeIframe();
          }

          // "image" : display a modal image with the given url
          else if (e.data.eventId === "image") {
            var url = e.data.value;
            var image = document.createElement("img");
            image.id = "bot_img";
            image.src = url;
            image.style =
              "position: absolute;right:60px;top:90px;max-width: 80vw;max-height: 80vh;display: block;width: auto;height: auto;";
            var closeSpan = document.createElement("span");
            closeSpan.setAttribute("class", "sr-only");
            closeSpan.textContent = "×";
            closeSpan.style =
              "position: absolute;top: 0;right: 0;color: white;font-size:6em;font-weight:900;cursor:pointer";
            var cont = document.createElement("div");
            cont.style =
              "position: relative;margin:auto;max-width: 80vw;max-height: 80vh;";
            cont.appendChild(closeSpan);
            cont.appendChild(image);
            var modal = document.createElement("div");
            modal.style =
              "position: fixed;z-index: 10000;left: 0;top: 0;width: 100%;height: 100%;overflow: auto;background-color: rgb(0,0,0);background-color: rgba(0,0,0,0.6);";
            modal.appendChild(cont);
            closeSpan.onclick = function () {
              document.body.removeChild(modal);
            };
            document.body.appendChild(modal);
          }

          // "botToggled" : enlarge the iframe if opening, reduce it otherwise
          else if (e.data.eventId === "botToggled") {
            window.isOpen = false;
            if (e.data.value) {
              window.isOpen = true;
            }
            window.changeFrameDims();
          }
        },
        false
      );
    };

    // create app-root element
    var fillFrame = function (framedoc) {
      var node = framedoc.createElement("app-root");
      framedoc.body.appendChild(node);
    };

    // inject scripts in iframe
    var loadScripts = function (framedoc) {
      var insertLink = function (href) {
        var node = framedoc.createElement("link");
        node.rel = "stylesheet";
        node.href = href;
        if (framedoc.getElementsByTagName("link")[0]) {
          s = framedoc.getElementsByTagName("link")[0].parentNode;
        } else {
          s =
            framedoc.head ||
            framedoc.querySelector("head") ||
            framedoc.framedocElement;
        }
        s.appendChild(node);
      };

      var insertHeadScript = function (src) {
        var node = framedoc.createElement("script");
        node.type = "text/javascript";
        node.async = false;
        node.src = src;
        if (framedoc.getElementsByTagName("link")[0]) {
          s = framedoc.getElementsByTagName("link")[0].parentNode;
        } else {
          s =
            framedoc.head ||
            framedoc.querySelector("head") ||
            framedoc.framedocElement;
        }
        s.appendChild(node);
      };

      var insertScript = function (src) {
        var node = framedoc.createElement("script");
        node.type = "text/javascript";
        node.async = false;
        node.src = src;
        var s = framedoc.body;
        s.parentNode.appendChild(node);
      };

      (manifest.config || []).forEach(function (src) {
        insertHeadScript(src);
      });
      manifest.js.forEach(function (src) {
        insertScript(src);
      });
      (manifest.css || []).forEach(function (href) {
        insertLink(href);
      });
    };

    setMobile();
    document.body.appendChild(frame);
    window.changeFrameDims();
  })({
    config: [base_href + "assets/config.js"],
    js: [
      base_href + "inline.bundle.js",
      base_href + "polyfills.bundle.js",
      base_href + "vendor.bundle.js",
      base_href + "main.bundle.js",
    ],
    css: [base_href + "styles.bundle.css"],
  });
}, 2000);
