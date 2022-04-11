<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $posts = Post::all();
        //laravel risolve la relazione con category
        $posts = Post::with("category")->get();
        $posts = Post::paginate(10);

        return response()->json(
            [
                "results" => $posts,
                "success" => true
            ]
        );
    }

}
