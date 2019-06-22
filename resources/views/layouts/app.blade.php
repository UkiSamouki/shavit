<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

   


    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Data Tables -->
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/main.css') }}" rel="stylesheet">
    <link href="{{ asset('css/vendor.css') }}" rel="stylesheet">


</head>
<body>
    <div id="app">
    
        <main>
            @yield('content')
        </main>
    </div>



    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>

    <script src="scripts/amcharts.js"></script>
    <script src="scripts/jquery.magnific-popup.js"></script>
    <script src="scripts/slick.js"></script>
    <script src="scripts/jquery.selectric.min.js"></script>
    <script src="scripts/jquery.maskedinput.js"></script>
    <script src="scripts/jquery.mCustomScrollbar.js"></script>
    <script src="scripts/jquery-ui.min.js"></script>
    <script src="scripts/main.js"></script> 
    
    
    <!-- Data Tables -->
    <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>

    <script src="{{ asset('js/dataTables.js') }}" defer></script>
        
</body>
</html>
