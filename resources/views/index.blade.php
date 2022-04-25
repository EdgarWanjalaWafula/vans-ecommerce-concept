<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{'Vans - Ecommerce Concept'}}</title>
    <link rel="stylesheet" href="{{ asset('/css/front.css') }}">
</head>
<body>
    <div id="root">
        @yield('content')
    </div>
    <!-- Scripts -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="{{ mix('/js/app.js') }}" type="module"></script>
</body>
</html>