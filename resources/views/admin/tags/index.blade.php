@extends ("admin.layouts.base")

@section("content")
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">

                <a href="{{route('admin.tags.create')}}" class="btn btn-primary my-3">Crea un post</a>

                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Slug</th>
                        <th scope="col">Azioni</th>
                      </tr>
                    </thead>
                    <tbody>
                        @foreach ($tags as $tag)
                            <tr>
                                <td>{{$tag->id}}</td>
                                <td>{{$tag->name}}</td>
                                <td>{{$tag->slug}}</td>
                             
                                <td class="d-flex">
                                    <a href="{{route('admin.tags.show', $tag->id)}}" class="btn btn-primary">Vedi</a>
                                    <a href="{{route('admin.tags.edit', $tag->id)}}" class="btn btn-warning mx-2">Modifica</a>

                                    <!-- Button trigger modal -->
                                    <button type="button" class="btn btn-danger mJS_deleteButton"  value="{{$category}}" data-toggle="modal" data-target="#staticBackdrop">
                                        Elimina
                                    </button>
                                </td>
                            </tr>                            
                        @endforeach
                    </tbody>
                  </table>
            </div>
        </div>
    </div>

     <!-- Modal -->
     <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Conferma eliminazione</h5>
                    <button type="button" class="close" data-dismiss="modal"></button>
                </div>
                <div class="modal-body" id="mJS_modelTitle"></div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Annulla</button>
                    <form method="POST" id="mJS_form">

                        @csrf
                        @method("DELETE")

                        <button class="btn btn-danger">Elimina</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
@endsection