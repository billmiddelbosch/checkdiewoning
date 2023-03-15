@extends('layouts/templateMail')
@section('body')

    <div>
        <p>Voor {{ $klantDetails->naam }} zou ik graag een aankoop rapport ontvangen voor de woning </p>

        <p>{{ $woning }} </p>

        <p>Het rapport mag rechtstreeks verzonden worden naar {{ $klantDetails->email }}, met een cc naar {{ $user->email }}</p>

    </div>
    
@endsection