import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbunsComponent } from './albuns/albuns.component';
import { PostagensComponent } from './postagens/postagens.component';
import { TodosComponent } from './todos/todos.component';


const routes: Routes = [
  { path: 'postagens', component: PostagensComponent },
  { path: 'albuns', component: AlbunsComponent },
  { path: 'todos', component: TodosComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
