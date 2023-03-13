<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Agent;
use Illuminate\Support\Facades\DB;


class agentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Agents = Agent::latest()->paginate(10);
        return [
            "status" => 1,
            "data" => $Agents
        ];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'JumbaId' => 'required',
            'Agent' => 'required',
        ]);
        $Agent = Agent::create(['JumbaId' => $request->JumbaId, 'agent' => $request->Agent]);
        return [
            "status" => 1,
            "data" => $Agent
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Agent  $Agent
     * @return \Illuminate\Http\Response
     */
    public function show(Agent $Agent)
    {
        return [
            "status" => 1,
            "data" =>$Agent
        ];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Agent  $Agent
     * @return \Illuminate\Http\Response
     */
    public function edit(Agent $Agent)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Agent  $Agent
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Agent $Agent)
    {
        $request->validate([
            'JumbaId' => 'required',
            'body' => 'required',
        ]);

        $Agent->update(['JumbaId' => $request->JumbaId, 'agent' => $request->Agent]);

        return [
            "status" => 1,
            "data" => $Agent,
            "msg" => "Agent updated successfully"
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Agent  $Agent
     * @return \Illuminate\Http\Response
     */
    public function destroy(Agent $Agent)
    {
        $Agent->delete();
        return [
            "status" => 1,
            "data" => $Agent,
            "msg" => "Agent deleted successfully"
        ];
    }
}

