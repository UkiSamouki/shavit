<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Hash;


class AdminCustomersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
         $users = User::all()->toJson(JSON_PRETTY_PRINT);

        return response($users)->header('Content-Type', 'application/json');
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
        $data = $request->all();
        $name = $data['name'];
        $phone = $data['phone'];
        $address = $data['address'];
        $email = $data['email'];
        $password = $data['password'];


        $user = new User;
        $user->password = Hash::make($password);
        $user->email = $email;
        $user->name = $name;
        $user->phone = $phone;
        $user->address = $address;
        $user->save();

        return response($user)->header('Content-Type', 'application/json');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {

        $data = $request->all();
        $id = $data['id'];
        $name = $data['name'];
        $phone = $data['phone'];
        $address = $data['address'];
        $email = $data['email'];

        $user = User::where('id', $id)->update( array('name'=> $name, 'email'=> $email, 'phone' => $phone, 'address' => $address));

        return response($user)->header('Content-Type', 'application/json');
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {

        $data = $request->all();
        $user = User::findOrFail($data['id']);
        $user->delete();
        return response(200, $user);
    }
}
