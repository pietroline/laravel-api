<?php

use App\Post;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        for($i=0; $i<50; $i++){
            $newPost = new Post();
            $newPost->title = $faker->word;
            $newPost->slug = $newPost->title;
            $newPost->content = $faker->text(rand(20, 500));
            $newPost->category_id = rand(1,5);
            $newPost->save();
        }
    }
}
