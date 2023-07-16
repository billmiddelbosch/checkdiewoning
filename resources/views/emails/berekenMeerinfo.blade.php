@extends('layouts/templateMail')
@section('body')

    <div>
        {{-- <p>Voor {{ $klantDetails->naam }} is het volgende product aangevraagd 
            <span class="font-bold"> {{ $klantDetails->selected }} </span> voor de volgende woning; 
        </p> --}}

        <p>
            Graag ff contact opnemen met adviseur <span class="font-bold"> {{ $user->name }}</span>. 
            Deze adviseur heeft berekent wat zijn omzet verbetering kan zijn en wenst graag aanvullende informatie
        </p>

    </div>
    
@endsection