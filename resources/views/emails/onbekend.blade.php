@extends('layouts/templateMail')
@section('body')

    <div>
        <p>Voor {{ $klantDetails->naam }} is het volgende product aangevraagd 
            <span class="font-bold"> {{ $klantDetails->selected }} </span> voor de volgende woning; 
        </p>

        <p>{{ $woning }} </p>

        <p>Graag ff contact opnemen met <span class="font-bold"> {{ $user->name }} </span> om product verder af te handelen.</p>

    </div>
    
@endsection