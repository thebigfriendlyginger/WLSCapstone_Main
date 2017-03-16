<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>

<body>
<ul>
    @foreach($employees as $employee)
        <li>
            <a href="/employees/{{ $employee->id }}">
                {{ $employee->FirstName }}
            </a>
        </li>
    @endforeach

</ul>
</body>

</html>