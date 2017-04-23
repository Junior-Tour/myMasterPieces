;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-jiahao" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M745.9988 453.6984H545.1387466184041V252.84557070306334c0-16.5568-13.4234-29.9797-29.9809-29.9797-16.5585 0-29.9809 13.4229-29.9809 29.9797v200.8528217868285H284.31489141416915c-16.5575 0-29.9809 13.4229-29.9809 29.9797s13.4234 29.9797 29.9809 29.9797h200.86105151018802v200.85182246436915c0 16.5568 13.4234 29.9797 29.9809 29.9797 16.5575 0 29.9809-13.4229 29.9809-29.9797V513.6577400522445h200.8600521467825c16.5575 0 29.9809-13.4229 29.9809-29.9797S762.5563 453.6984 745.9988 453.6984z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiazai" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M495.897106 752.797251c0.645733 0.937348 1.371286 1.836835 2.202245 2.669806 0.831982 0.829901 1.727412 1.551332 2.660705 2.194992 0.096195 0.065492 0.184203 0.140193 0.279374 0.203638 0.083915 0.058328 0.173969 0.104377 0.25993 0.157589 3.006597 1.956561 6.588315 3.103688 10.441221 3.103688 3.855976 0 7.437694-1.147126 10.441221-3.103688 0.085961-0.054235 0.176016-0.102331 0.261977-0.157589 0.096195-0.064468 0.186249-0.138146 0.279374-0.203638 0.933293-0.64366 1.828723-1.36509 2.660705-2.194992 0.833005-0.832971 1.558559-1.732457 2.204292-2.671852l304.705998-304.71091c7.400854-7.383154 7.400854-19.394722 0-26.797319-7.400854-7.421017-19.413937-7.421017-26.814791 0L530.931429 695.823656l0-529.530258c0-10.605545-8.582821-19.188015-19.187777-19.188015s-19.189824 8.582469-19.189824 19.188015l0 529.530258L218.005898 421.286975c-7.401877-7.421017-19.414961-7.421017-26.815814 0-7.401877 7.399527-7.401877 19.414165 0 26.797319L495.897106 752.797251zM876.332912 837.879022 147.152344 837.879022c-10.60598 0-19.188801 8.582469-19.188801 19.189038 0 10.587126 8.582821 19.186991 19.188801 19.186991l729.180568 0c10.58756 0 19.189824-8.599865 19.189824-19.186991C895.522736 846.461491 886.920472 837.879022 876.332912 837.879022z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fenxiang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M706.020083 721.381333c-16.888264 0-32.775696 4.21499-46.741286 11.581756l-206.311481-152.932806c2.739495-10.060103 4.327726-20.595019 4.327726-31.521861 0-16.748419-3.455836-32.682288-9.658331-47.161019l218.951839-214.633953c12.107195 5.177919 25.431148 8.060567 39.431532 8.060567 55.439719 0 100.381964-44.940448 100.381964-100.377951 0-55.437502-44.942245-100.378974-100.381964-100.378974s-100.381964 44.941472-100.381964 100.378974c0 9.233273 1.347745 18.134996 3.684042 26.627397L386.671954 439.289123c-15.046242-6.799856-31.69402-10.678179-49.278158-10.678179-66.218612 0-119.901247 53.680489-119.901247 119.897478 0 66.215965 53.682635 119.895431 119.901247 119.895431 23.462232 0 45.280972-6.841812 63.765654-18.489059L607.475024 802.853739c-1.169683 6.128569-1.836904 12.436215-1.836904 18.905544 0 55.438526 44.942245 100.379998 100.381964 100.379998s100.381964-44.941472 100.381964-100.379998C806.402047 766.322804 761.459802 721.381333 706.020083 721.381333"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ci" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.23252 63.622016c-247.379157 0-447.920566 200.581318-447.920566 447.960475 0 247.387343 200.541409 447.920566 447.920566 447.920566s447.920566-200.533222 447.920566-447.920566C959.152063 264.203334 758.611677 63.622016 511.23252 63.622016zM511.23252 903.500579c-216.464053 0-391.94981-175.462221-391.94981-391.918088s175.48678-391.94981 391.94981-391.94981 391.957996 175.494966 391.957996 391.94981S727.69555 903.500579 511.23252 903.500579z"  ></path>' +
    '' +
    '<path d="M743.770667 295.965735c-7.531534-6.393617-22.577205-9.595542-45.154409-9.595542l-254.55765 0c-14.675234 0-22.013363 7.337105-22.013363 22.01234 0 13.176091 7.338129 19.754926 22.013363 19.754926l257.379928 0c8.652054 0 12.982686 4.51585 12.982686 13.546527l0 361.80014c0 16.174378-3.580548 25.584702-10.724249 28.221762-10.160407 4.136204-21.263279 6.208399-33.301454 6.208399-21.078061 0-45.154409-6.773264-72.246441-20.319791-7.90197-3.765767-14.393825-5.92699-19.473517-6.490831-5.079692-0.563842-9.225105 0.088004-12.416797 1.974981-3.201925 1.87879-5.459339 4.51585-6.774287 7.90197-1.323135 3.38612-1.974981 7.143701-1.974981 11.288091 0 6.393617 3.854794 12.505825 11.571546 18.343787 7.707542 5.829775 19.472494 11.190877 35.276435 16.086373l-0.563842 0c27.092032 9.400091 51.733245 14.110369 73.940013 14.110369 13.166881 0 24.737404-1.888 34.712593-5.644557 9.965979-3.764744 18.246573-8.748245 24.834618-14.956643 6.579859-6.209422 11.571546-13.265118 14.957667-21.166065 3.38612-7.90197 5.079692-16.183588 5.079692-24.835641l0-372.524388C757.317195 319.106782 752.801345 303.866682 743.770667 295.965735z"  ></path>' +
    '' +
    '<path d="M429.948239 418.446277l242.704694 0c13.915941 0 20.883633-6.958482 20.883633-20.883633 0-13.916964-6.967692-20.883633-20.883633-20.883633L429.948239 376.679012c-14.304797 0-21.448498 6.967692-21.448498 20.883633C408.499741 411.487795 415.643442 418.446277 429.948239 418.446277z"  ></path>' +
    '' +
    '<path d="M285.454334 301.609269l-1.693572-0.564865c20.319791 16.932648 37.534871 31.705096 51.645241 44.308135 14.110369 12.611226 25.487487 23.23826 34.148751 31.890314 6.393617 6.402827 12.222369 10.07138 17.497513 11.006681 5.26491 0.943488 9.683547 0.379647 13.264095-1.693572 3.571339-2.064009 6.393617-4.982478 8.466835-8.748245 2.064009-3.75758 3.104711-7.338129 3.104711-10.724249 0-2.258437-0.194428-4.03899-0.564865-5.362124-0.378623-1.313925-1.225921-2.910283-2.539846-4.797259-1.323135-1.87879-3.483334-4.321422-6.490831-7.337105-3.015683-3.007497-7.337105-7.143701-12.981662-12.417821-10.160407-9.031701-20.417005-18.150382-30.761608-27.375487-10.353812-9.215896-20.602224-18.343787-30.760584-27.374464-5.27412-4.885264-9.877975-8.933463-13.82896-12.135388-3.950985-3.192715-6.870478-5.167696-8.748245-5.925966l1.128707 1.128707c-4.145413-2.62785-8.845459-3.950985-14.110369-3.950985-3.015683 0.75827-6.305613 2.451842-9.877975 5.079692-3.580548 2.63706-6.208399 5.925966-7.90197 9.877975-1.693572 3.950985-1.976004 8.184403-0.847298 12.69923C274.730085 293.707298 278.68107 297.852712 285.454334 301.609269z"  ></path>' +
    '' +
    '<path d="M656.284127 663.690818c7.143701-7.337105 10.724249-20.036335 10.724249-38.098713L667.008376 513.834788c0-17.682731-3.580548-30.003338-10.724249-36.970006-7.15291-6.958482-19.384489-10.441816-36.687574-10.441816L482.440777 466.422965c-16.932648 0-28.786627 3.299139-35.55989 9.877975-6.77224 6.588045-10.160407 19.10308-10.160407 37.534871l0 111.757317c0 13.926174 1.87879 24.6494 5.644557 32.172747-4.145413-3.007497-8.942673-3.952009-14.392802-2.822278-5.459339 1.128707-10.821463 5.459339-16.086373 12.981662-4.51585 6.402827-9.225105 12.69923-14.110369 18.909675-4.894474 6.208399-9.975189 11.94096-15.240099 17.21508-4.145413 4.136204-7.43432 7.523347-9.877975 10.160407-2.451842 2.62785-4.426823 4.700045-5.925966 6.208399l12.981662-258.509658c-0.378623-15.045671-4.426823-26.810622-12.135388-35.276435-7.716752-8.466835-19.287275-12.135388-34.71157-11.006681-11.668761 0.75827-23.335475 1.693572-34.995025 2.822278-11.667737 1.128707-23.335475 2.072195-34.994002 2.822278-8.661264 0.75827-14.110369 2.63706-16.368806 5.644557-2.257413 3.016707-3.38612 8.661264-3.38612 16.932648 0 8.661264 1.313925 14.393825 3.950985 17.21508 2.62785 2.822278 8.272407 3.861958 16.932648 3.104711l61.523215-5.079692c7.143701-0.750083 10.724249 1.508353 10.724249 6.773264-1.886977 42.895973-4.048199 86.640266-6.490831 131.230833-2.451842 44.590568-4.612041 88.333838-6.490831 131.22981 0 12.788258 2.628874 24.076348 7.90197 33.866319 5.265934 9.780761 11.852956 14.675234 19.754926 14.675234 12.416797 0 32.543184-14.304797 60.393485-42.896996 28.221762-28.221762 42.332131-47.411823 42.332131-57.57223 0-2.62785-0.757247-5.26491-2.257413-7.900947 6.77224 4.145413 17.116843 6.208399 31.04404 6.208399l137.155776 0C636.899638 674.698522 649.13224 671.028946 656.284127 663.690818zM486.391762 634.05894c-4.894474 0-7.338129-3.571339-7.338129-10.723226L479.053634 515.52836c0-6.014994 2.443655-9.030677 7.338129-9.030677l131.512243 0c4.885264 0 7.337105 3.015683 7.337105 9.030677l0 107.807355c0 7.151887-2.451842 10.723226-7.337105 10.723226L486.391762 634.05894z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-aixin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M750.155587 103.522772c-108.196211 0-200.75221 66.945715-238.523465 161.669076-37.770232-94.723362-130.323161-161.669076-238.521418-161.669076-141.768841 0-256.694313 114.926496-256.694313 256.694313 0 79.879282 37.112246 149.783375 93.702102 201.584158l401.514653 391.617236 244.565065-235.266281c40.011272-36.421514 77.415161-72.213695 110.182448-105.994056l46.198182-44.442188c57.06774-51.715849 94.272084-127.35762 94.272084-207.498868C1006.850923 218.448244 891.924427 103.522772 750.155587 103.522772z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yinliang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M428.032 196.608c-18.432-18.432-47.104-16.384-65.536 2.048L212.992 348.16 61.44 348.16c-34.816 0-61.44 26.624-61.44 61.44l0 163.84c0 34.816 26.624 61.44 61.44 61.44l135.168 0 155.648 155.648c20.48 12.288 61.44 20.48 77.824-12.288L428.032 196.608z"  ></path>' +
    '' +
    '<path d="M524.288 352.256c30.72 34.816 49.152 79.872 49.152 129.024 0 57.344-24.576 108.544-63.488 143.36l45.056 49.152c49.152-45.056 79.872-108.544 79.872-182.272 0-69.632-28.672-131.072-75.776-176.128L524.288 352.256zM688.128 182.272l-43.008 45.056C714.752 294.912 757.76 387.072 757.76 491.52c0 108.544-47.104 204.8-120.832 272.384l40.96 45.056C763.904 731.136 819.2 616.448 819.2 491.52 819.2 370.688 768 260.096 688.128 182.272zM831.488 34.816l-43.008 45.056C894.976 184.32 962.56 329.728 962.56 491.52c0 167.936-71.68 319.488-186.368 423.936l40.96 45.056C944.128 843.776 1024 677.888 1024 491.52 1024 313.344 950.272 151.552 831.488 34.816z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-laji2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M955.365 120.695l-300.704 0 0-13.748c0-40.567-33.029-73.575-73.597-73.575l-133.816 0c-40.568 0-73.575 33.007-73.575 73.575l0 13.748-300.683 0c-12.026 0-21.787 9.76-21.787 21.787s9.76 21.787 21.787 21.787l56.015 0 71.243 807.862c0.981 11.264 10.414 19.869 21.699 19.869l580.122 0c11.307 0 20.697-8.628 21.699-19.869l71.222-807.862 60.372 0c12.048 0 21.787-9.76 21.787-21.787s-9.76-21.787-21.787-21.787zM394.35 779.577c0 12.048-9.76 21.787-21.787 21.787s-21.787-9.739-21.787-21.787l0-414.192c0-12.026 9.76-21.787 21.787-21.787s21.787 9.76 21.787 21.787l0 414.192zM535.965 779.577c0 12.048-9.739 21.787-21.787 21.787-12.026 0-21.787-9.739-21.787-21.787l0-414.192c0-12.026 9.76-21.787 21.787-21.787 12.048 0 21.787 9.76 21.787 21.787l0 414.192zM611.087 120.695l-193.838 0 0-13.748c0-16.558 13.464-30.001 30.001-30.001l133.816 0c16.558 0 30.023 13.464 30.023 30.001l0 13.748zM677.581 779.577c0 12.048-9.739 21.787-21.787 21.787s-21.787-9.739-21.787-21.787l0-414.192c0-12.026 9.739-21.787 21.787-21.787s21.787 9.76 21.787 21.787l0 414.192z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon-test" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M399.9 385.9h28V638h-28zM582 385.9h28V638h-28z"  ></path>' +
    '' +
    '<path d="M512 960.2c-119.7 0-232.3-46.6-316.9-131.3C110.4 744.3 63.8 631.7 63.8 512c0-119.7 46.6-232.3 131.3-316.9C279.7 110.4 392.3 63.8 512 63.8c119.7 0 232.3 46.6 316.9 131.3 84.7 84.6 131.3 197.2 131.3 316.9 0 119.7-46.6 232.2-131.3 316.9-84.6 84.7-197.2 131.3-316.9 131.3z m0-868.4c-112.2 0-217.7 43.7-297.1 123.1C135.5 294.3 91.8 399.8 91.8 512c0 112.2 43.7 217.7 123.1 297.1 79.4 79.4 184.9 123.1 297.1 123.1s217.7-43.7 297.1-123.1c79.4-79.4 123.1-184.9 123.1-297.1 0-112.2-43.7-217.7-123.1-297.1C729.7 135.5 624.2 91.8 512 91.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon-test1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M450.6 677.1l-22.7-11V357.9l22.7-11L646.7 501v22L450.6 677.1z m5.4-290.3v250.5L615.4 512 456 386.8z"  ></path>' +
    '' +
    '<path d="M512 960.2c-119.7 0-232.3-46.6-316.9-131.3C110.4 744.3 63.8 631.7 63.8 512c0-119.7 46.6-232.3 131.3-316.9C279.7 110.4 392.3 63.8 512 63.8c119.7 0 232.3 46.6 316.9 131.3 84.7 84.6 131.3 197.2 131.3 316.9 0 119.7-46.6 232.2-131.3 316.9-84.6 84.7-197.2 131.3-316.9 131.3z m0-868.4c-112.2 0-217.7 43.7-297.1 123.1C135.5 294.3 91.8 399.8 91.8 512c0 112.2 43.7 217.7 123.1 297.1 79.4 79.4 184.9 123.1 297.1 123.1s217.7-43.7 297.1-123.1c79.4-79.4 123.1-184.9 123.1-297.1 0-112.2-43.7-217.7-123.1-297.1C729.7 135.5 624.2 91.8 512 91.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon-test2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M520.6 676.2l-22.5-11V358.7l22.5-11L715.7 501v22L520.6 676.2z m5.3-288.8v249.2L684.5 512 525.9 387.4zM241.9 676.2l-22.5-11V358.7l22.5-11L437 501v22L241.9 676.2z m5.3-288.8v249.2L405.8 512 247.2 387.4zM776.8 386.6h27.9v250.8h-27.9z"  ></path>' +
    '' +
    '<path d="M512 957.9c-119.1 0-231.1-46.4-315.3-130.6C112.5 743.1 66.1 631.1 66.1 512c0-119.1 46.4-231.1 130.6-315.3C280.9 112.5 392.9 66.1 512 66.1c119.1 0 231.1 46.4 315.3 130.6 84.2 84.2 130.6 196.2 130.6 315.3 0 119.1-46.4 231.1-130.6 315.3-84.2 84.2-196.2 130.6-315.3 130.6z m0-864c-111.7 0-216.6 43.5-295.6 122.5-79 79-122.5 183.9-122.5 295.6 0 111.7 43.5 216.6 122.5 295.6 79 79 183.9 122.5 295.6 122.5 111.7 0 216.6-43.5 295.6-122.5 79-79 122.5-183.9 122.5-295.6 0-111.7-43.5-216.6-122.5-295.6-79-79-183.9-122.5-295.6-122.5z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)