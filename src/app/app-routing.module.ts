import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { LayoutComponent } from './ui/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: PostsComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
    ],
  },
  // {
  //   path: 'firebase',
  //   loadChildren: () =>
  //     import('./modules/firebase/firebase.module').then(
  //       (m) => m.FirebaseModule
  //     ),
  // },
  {
    path: 'users',
    // component: LayoutComponent,
    loadChildren: () =>
      import('./modules/users/user.module').then((m) => m.UsersModule),
  },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
export const routing: ModuleWithProviders<RouterModule> =
  RouterModule.forRoot(routes);
