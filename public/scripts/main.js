'use strict';

/* Hebrew initialisation for the UI Datepicker extension. */
/* Written by Amir Hardon (ahardon at gmail dot com). */
(function (factory) {
	if (typeof define === 'function' && define.amd) {

		// AMD. Register as an anonymous module.
		define(['../widgets/datepicker'], factory);
	} else {

		// Browser globals
		factory(jQuery.datepicker);
	}
})(function (datepicker) {

	datepicker.regional.he = {
		closeText: 'סגור',
		prevText: '&#x3C;הקודם',
		nextText: 'הבא&#x3E;',
		currentText: 'היום',
		monthNames: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
		monthNamesShort: ['ינו', 'פבר', 'מרץ', 'אפר', 'מאי', 'יוני', 'יולי', 'אוג', 'ספט', 'אוק', 'נוב', 'דצמ'],
		dayNames: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
		dayNamesShort: ['א\'', 'ב\'', 'ג\'', 'ד\'', 'ה\'', 'ו\'', 'שבת'],
		dayNamesMin: ['א\'', 'ב\'', 'ג\'', 'ד\'', 'ה\'', 'ו\'', 'שבת'],
		weekHeader: 'Wk',
		dateFormat: 'dd/mm/yy',
		firstDay: 0,
		isRTL: true,
		showMonthAfterYear: false,
		yearSuffix: '' };
	datepicker.setDefaults(datepicker.regional.he);

	return datepicker.regional.he;
});
'use strict';

var app = {

  init: function init() {
    app.windowResize();
    app.allscript();
    app.datepicker();
    app.menu();
    app.modals();
    app.animate();
    app.selectric();
    app.tabs();
    app.validate();
    app.accordeon();
    app.chart();
  },

  windowResize: function windowResize() {
    $(window).on('resize', function () {});
  },

  windowLoad: function windowLoad() {
    $(window).on('load', function () {
      $('.jsScrollBarY').each(function () {
        var $this = $(this);
        $this.mCustomScrollbar({
          axis: 'x',
          scrollInertia: 120
        });
      });

      $('.table_scroll').each(function () {
        var $this = $(this);
        $this.mCustomScrollbar({
          axis: 'x',
          setLeft: 0,
          scrollInertia: 120,
          callbacks: {
            onUpdate: function onUpdate() {
              $this.mCustomScrollbar('scrollTo', 'right');
            }
          }
        });
        $this.mCustomScrollbar('scrollTo', 'right');
      });
    });
  },

  allscript: function allscript() {

    function homeScreen() {
      if ($('.b_home_screen').length) {
        var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var headheight = $('header').innerHeight(),
            blHeight = height - headheight - 30;
        $('.b_home_screen .screen_wrapper').css('min-height', blHeight);
      }
    }

    homeScreen();

    $(window).on('resize', function () {
      homeScreen();
    });

    $('.jsUserControl').on('click', function (e) {
      e.preventDefault();
      $(this).next('.user_control').fadeToggle(300);
    });
    $(document).on('click touchstart', function (e) {
      var $userControl = $('.header_avatar');
      if (!$userControl.is(e.target) && $userControl.has(e.target).length === 0) {
        $('.user_control').fadeOut(300);
      }
    });

    $('.jsMinus').click(function () {
      var valmin = $(this).parent().find('input').attr('minimum');
      var $input = $(this).parent().find('input');
      if ($input.val() == '') {
        $input.val('1');
      }
      if ($(this).parent().find('input[minimum]').length) {
        if ($input.val() > valmin) {
          var count = parseInt($input.val()) - 1;
          count = count < 1 ? 1 : count;
          $input.val(count);
          return false;
        }
      } else {
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        return false;
      }
    });
    $('.jsPlus').click(function () {
      var $input = $(this).parent().find('input');
      if ($input.val() == '') {
        $input.val('1');
      }
      $input.val(parseInt($input.val()) + 1);
      return false;
    });

    $(document).on('click', '.search_result span', function (e) {
      e.preventDefault();
      $(this).parents('.search_result').find('span').removeClass('active');
      $(this).addClass('active');
    });

    $('.unit_system_wrapper [type="radio"]').on('change', function () {
      var min = $(this).attr('data-min'),
          val = $(this).attr('data-val');
      $('#quantity').attr('min', min);
      $('#quantity').val(val);
    });

    $('input.jsProductAppears').on('click', function () {
      $('input.jsProductAppears').prop('checked', false);
      $(this).prop('checked', true);
    });
  },

  datepicker: function datepicker() {
    if ($('#date').length) {
      $('#date').datepicker({
        showOtherMonths: true,
        minDate: 0,
        beforeShow: function beforeShow() {
          $('.date_wrapper').append($('#ui-datepicker-div'));
        }
      }).datepicker('setDate', new Date());
    }
    if ($('#datefrom').length) {
      $('#datefrom').datepicker({
        showOtherMonths: true,
        minDate: 0,
        beforeShow: function beforeShow() {
          $('.datefrom').append($('#ui-datepicker-div'));
        }
      });
    }
    if ($('#dateto').length) {
      $('#dateto').datepicker({
        showOtherMonths: true,
        minDate: 0,
        beforeShow: function beforeShow() {
          $('.dateto').append($('#ui-datepicker-div'));
        }
      });
    }
  },

  menu: function menu() {
    var $btnMenu = $('.jsMenu');
    $btnMenu.click(function () {
      $(this).toggleClass('menu-is-active');
      $('.nav_menu').toggleClass('menu_open');
      $('body').toggleClass('menuopen');
    });
    $('.jsCloseMenu').on('click', function (e) {
      e.preventDefault();
      $('.nav_menu').removeClass('menu_open');
    });
  },

  modals: function modals() {
    $('.jsOpenModals').magnificPopup({
      removalDelay: 300,
      mainClass: 'my-mfp-slide-bottom'
    });
    $('.jsCloseModal').on('click', function (e) {
      e.preventDefault();
      $(this).parents('.b_modal').magnificPopup('close');
    });
  },

  animate: function animate() {
    function animateCSS(element, animationName, callback) {
      var node = document.querySelector(element);
      node.classList.add('animated', animationName);

      function handleAnimationEnd() {
        node.classList.remove('animated', animationName);
        node.removeEventListener('animationend', handleAnimationEnd);

        if (typeof callback === 'function') callback();
      }

      node.addEventListener('animationend', handleAnimationEnd);
    }

    $('.jsForgotPassword').on('click', function (e) {
      e.preventDefault();
      $('.login__signin').hide();
      $('.login__forgot').show();
      animateCSS('.login__forgot', 'flipInX');
    });

    $('.jsCancelForgotPassword').on('click', function (e) {
      e.preventDefault();
      $('.login__forgot').hide();
      $('.login__signin').show();
      animateCSS('.login__signin', 'flipInX');
    });
  },

  selectric: function selectric() {
    $('.jsSelectricView').selectric({
      maxHeight: 200,
      disableOnMobile: false,
      nativeOnMobile: false
    });
  },

  tabs: function tabs() {
    var tabs = $('.tabs');
    tabs.each(function () {

      var tabs = $(this),
          tab = tabs.find('.tabs__tab'),
          content = tabs.find('.tabs__item');

      tab.each(function (index, element) {
        $(this).attr('data-tab', index);
      });

      function showContent(i) {
        tab.removeClass('-active');
        content.removeClass('-active').removeClass('-fade');
        tab.eq(i).addClass('-active');
        content.eq(i).addClass('-active');
        setTimeout(function () {
          content.eq(i).addClass('-fade');
        }, 1);
      }

      tab.on('click', function (e) {
        e.preventDefault();
        showContent(parseInt($(this).attr('data-tab')));
      });
    });

    var innertabs = $('.inner_tabs');
    innertabs.each(function () {

      var innertabs = $(this),
          innertab = innertabs.find('.inner_tabs__tab'),
          innercontent = innertabs.find('.inner_tabs__item');

      innertab.each(function (index, element) {
        $(this).attr('data-innertab', index);
      });

      function showContent(i) {
        innertab.removeClass('-active');
        innercontent.removeClass('-active').removeClass('-fade');
        innertab.eq(i).addClass('-active');
        innercontent.eq(i).addClass('-active');
        setTimeout(function () {
          innercontent.eq(i).addClass('-fade');
        }, 1);
      }

      innertab.on('click', function (e) {
        e.preventDefault();
        showContent(parseInt($(this).attr('data-innertab')));
      });
    });
  },

  validate: function validate() {

    // $('input[type="tel"]').mask('+7 (999) 999-9999');

  },

  accordeon: function accordeon() {
    var accord = $('.accord'),
        accord_btn = accord.find('.accord__btn'),
        accord_content = accord.find('.accord__content');

    accord_btn.on('click', function (e) {
      e.preventDefault();

      var $this = $(this),
          $this_content = $this.closest('.accord__item').find('.accord__content');

      if ($this.hasClass('-active')) {
        $this.removeClass('-active');
        $this_content.slideUp();
      } else {
        accord_btn.removeClass('-active');
        accord_content.slideUp();
        $this.addClass('-active');
        $this_content.slideDown();
      }
    });

    var accordn = $('.accord_no_autoclose'),
        accord_btnn = accordn.find('.accord__btn');

    accord_btnn.on('click', function (e) {
      e.preventDefault();

      var $this = $(this),
          $this_content = $this.closest('.accord__item').find('.accord__content');

      $this.toggleClass('-active');
      $this_content.slideToggle();
    });
  },

  chart: function chart() {

    if ($('#chart_weight').length) {

      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      var chart = am4core.create('chart_weight', am4charts.XYChart);
      var data = [{
        'date': '2012-07-27',
        'value': 13
      }, {
        'date': '2012-07-28',
        'value': 11
      }, {
        'date': '2012-07-29',
        'value': 15
      }, {
        'date': '2012-07-30',
        'value': 16
      }, {
        'date': '2012-07-31',
        'value': 140
      }, {
        'date': '2012-08-01',
        'value': 13
      }, {
        'date': '2012-08-02',
        'value': 22
      }, {
        'date': '2012-08-03',
        'value': 23
      }];
      chart.data = data;

      // Create axes
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 60;

      // Create value axis
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      valueAxis.min = 0;
      valueAxis.max = 160;
      valueAxis.strictMinMax = true;

      // Create series
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = 'value';
      series.dataFields.dateX = 'date';
      series.tooltipText = '{value}';
      series.tooltipText = 'RMR: {valueY}';
      series.tooltip.pointerOrientation = 'vertical';
      series.legendSettings.valueText = 'RMR: {valueY}';
      series.strokeWidth = 3;
      series.tensionX = 0.8;

      // Add legend
      // chart.legend = new am4charts.Legend();


      chart.cursor = new am4charts.XYCursor();
      chart.cursor.snapToSeries = series;
      chart.cursor.xAxis = dateAxis;

      chart.scrollbarX = new am4core.Scrollbar();
    }

    if ($('#chart_bmi').length) {

      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      var chart = am4core.create('chart_bmi', am4charts.XYChart);
      var data = [{
        'date': '2012-07-27',
        'value': 5
      }, {
        'date': '2012-07-28',
        'value': 31
      }, {
        'date': '2012-07-29',
        'value': 5
      }, {
        'date': '2012-07-30',
        'value': 26
      }, {
        'date': '2012-07-31',
        'value': 38
      }, {
        'date': '2012-08-01',
        'value': 3
      }, {
        'date': '2012-08-02',
        'value': 2
      }, {
        'date': '2012-08-03',
        'value': 23
      }];
      chart.data = data;

      // Create axes
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 60;
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      valueAxis.min = 0;
      valueAxis.max = 55;
      valueAxis.strictMinMax = true;

      // Create series
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = 'value';
      series.dataFields.dateX = 'date';
      series.tooltipText = '{value}';
      series.tooltip.pointerOrientation = 'vertical';
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.snapToSeries = series;
      chart.cursor.xAxis = dateAxis;
      series.strokeWidth = 3;
      series.tensionX = 0.8;

      chart.scrollbarX = new am4core.Scrollbar();
    }

    if ($('#chart_fat_percentage').length) {

      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      var chart = am4core.create('chart_fat_percentage', am4charts.XYChart);
      var data = [{
        'date': '2012-07-27',
        'value': 13
      }, {
        'date': '2012-07-28',
        'value': 11
      }, {
        'date': '2012-07-29',
        'value': 15
      }, {
        'date': '2012-07-30',
        'value': 16
      }, {
        'date': '2012-07-31',
        'value': 18
      }, {
        'date': '2012-08-01',
        'value': 13
      }, {
        'date': '2012-08-02',
        'value': 22
      }, {
        'date': '2012-08-03',
        'value': 23
      }];
      chart.data = data;

      // Create axes
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 60;
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      valueAxis.min = 0;
      valueAxis.max = 60;
      valueAxis.strictMinMax = true;

      // Create series
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = 'value';
      series.dataFields.dateX = 'date';
      series.tooltipText = '{value}';
      series.tooltip.pointerOrientation = 'vertical';
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.snapToSeries = series;
      chart.cursor.xAxis = dateAxis;
      series.strokeWidth = 3;
      series.tensionX = 0.8;

      chart.scrollbarX = new am4core.Scrollbar();
    }

    if ($('#chart_fat_mass').length) {

      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      var chart = am4core.create('chart_fat_mass', am4charts.XYChart);
      var data = [{
        'date': '2012-07-27',
        'value': 5
      }, {
        'date': '2012-07-28',
        'value': 31
      }, {
        'date': '2012-07-29',
        'value': 5
      }, {
        'date': '2012-07-30',
        'value': 26
      }, {
        'date': '2012-07-31',
        'value': 38
      }, {
        'date': '2012-08-01',
        'value': 3
      }, {
        'date': '2012-08-02',
        'value': 2
      }, {
        'date': '2012-08-03',
        'value': 23
      }];
      chart.data = data;

      // Create axes
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 60;
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      valueAxis.min = 0;
      valueAxis.max = 60;
      valueAxis.strictMinMax = true;

      // Create series
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = 'value';
      series.dataFields.dateX = 'date';
      series.tooltipText = '{value}';
      series.tooltip.pointerOrientation = 'vertical';
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.snapToSeries = series;
      chart.cursor.xAxis = dateAxis;
      series.strokeWidth = 3;
      series.tensionX = 0.8;

      chart.scrollbarX = new am4core.Scrollbar();
    }

    if ($('#chart_height').length) {

      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      var chart = am4core.create('chart_height', am4charts.XYChart);
      var data = [{
        'date': '2012-07-27',
        'value': 13
      }, {
        'date': '2012-07-28',
        'value': 11
      }, {
        'date': '2012-07-29',
        'value': 15
      }, {
        'date': '2012-07-30',
        'value': 16
      }, {
        'date': '2012-07-31',
        'value': 18
      }, {
        'date': '2012-08-01',
        'value': 13
      }, {
        'date': '2012-08-02',
        'value': 22
      }, {
        'date': '2012-08-03',
        'value': 23
      }];
      chart.data = data;

      // Create axes
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 60;
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      valueAxis.min = 0;
      valueAxis.max = 60;
      valueAxis.strictMinMax = true;

      // Create series
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = 'value';
      series.dataFields.dateX = 'date';
      series.tooltipText = '{value}';
      series.tooltip.pointerOrientation = 'vertical';
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.snapToSeries = series;
      chart.cursor.xAxis = dateAxis;
      series.strokeWidth = 3;
      series.tensionX = 0.8;

      chart.scrollbarX = new am4core.Scrollbar();
    }

    if ($('#chart_muscle_mass').length) {

      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      var chart = am4core.create('chart_muscle_mass', am4charts.XYChart);
      var data = [{
        'date': '2012-07-27',
        'value': 5
      }, {
        'date': '2012-07-28',
        'value': 31
      }, {
        'date': '2012-07-29',
        'value': 5
      }, {
        'date': '2012-07-30',
        'value': 26
      }, {
        'date': '2012-07-31',
        'value': 38
      }, {
        'date': '2012-08-01',
        'value': 3
      }, {
        'date': '2012-08-02',
        'value': 2
      }, {
        'date': '2012-08-03',
        'value': 23
      }];
      chart.data = data;

      // Create axes
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 60;
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      valueAxis.min = 0;
      valueAxis.max = 60;
      valueAxis.strictMinMax = true;

      // Create series
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = 'value';
      series.dataFields.dateX = 'date';
      series.tooltipText = '{value}';
      series.tooltip.pointerOrientation = 'vertical';
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.snapToSeries = series;
      chart.cursor.xAxis = dateAxis;
      series.strokeWidth = 3;
      series.tensionX = 0.8;

      chart.scrollbarX = new am4core.Scrollbar();
    }

    if ($('#chart_volume_bdomen').length) {

      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      var chart = am4core.create('chart_volume_bdomen', am4charts.XYChart);
      var data = [{
        'date': '2012-07-27',
        'value': 5
      }, {
        'date': '2012-07-28',
        'value': 31
      }, {
        'date': '2012-07-29',
        'value': 5
      }, {
        'date': '2012-07-30',
        'value': 26
      }, {
        'date': '2012-07-31',
        'value': 38
      }, {
        'date': '2012-08-01',
        'value': 3
      }, {
        'date': '2012-08-02',
        'value': 2
      }, {
        'date': '2012-08-03',
        'value': 23
      }];
      chart.data = data;

      // Create axes
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 60;
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      valueAxis.min = 0;
      valueAxis.max = 160;
      valueAxis.strictMinMax = true;

      // Create series
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = 'value';
      series.dataFields.dateX = 'date';
      series.tooltipText = '{value}';
      series.tooltip.pointerOrientation = 'vertical';
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.snapToSeries = series;
      chart.cursor.xAxis = dateAxis;
      series.strokeWidth = 3;
      series.tensionX = 0.8;

      chart.scrollbarX = new am4core.Scrollbar();
    }

    if ($('#calories_graph').length) {
      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      // Create chart instance
      var chart = am4core.create('calories_graph', am4charts.PieChart);

      // Add data
      chart.data = [{
        'category': 'Fat',
        'litres': 98.2
      }, {
        'category': 'Protein',
        'litres': 8.08
      }, {
        'category': 'Carb',
        'litres': 73
      }, {
        'category': 'Calories',
        'litres': 678
      }];

      // Set inner radius
      chart.innerRadius = am4core.percent(50);

      // Add and configure Series
      var pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = 'litres';
      pieSeries.dataFields.category = 'category';
      pieSeries.slices.template.stroke = am4core.color('#fff');
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;
      pieSeries.labels.template.disabled = true;

      // This creates initial animation
      pieSeries.hiddenState.properties.opacity = 1;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;

      pieSeries.colors.list = [am4core.color('#fd1361'), am4core.color('#366cf3'), am4core.color('#18a899'), am4core.color('#e6e61d')];
    }
  }

};

$(document).ready(app.init());

app.windowLoad();