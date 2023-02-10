import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shared/components/dashboard-tabs/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'pin',
    loadChildren: () => import('./pages/auth-screens/pin/pin.module').then( m => m.PinPageModule)
  },
  {
    path: 'create-password',
    loadChildren: () => import('./pages/auth-screens/create-password/create-password.module').then( m => m.CreatePasswordPageModule)
  },
  {
    path: 'security-question',
    loadChildren: () => import('./pages/auth-screens/security-question/security-question.module').then( m => m.SecurityQuestionPageModule)
  },
  {
    path: 'enter-mobile-number',
    loadChildren: () => import('./pages/auth-screens/enter-mobile-number/enter-mobile-number.module').then( m => m.EnterMobileNumberPageModule)
  },
  {
    path: 'profile-details',
    loadChildren: () => import('./pages/profile-screens/profile-details/profile-details.module').then( m => m.ProfileDetailsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/profile-screens/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/auth-screens/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/profile-screens/support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'wallet-levels',
    loadChildren: () => import('./pages/wallet/wallet-levels/wallet-levels.module').then( m => m.WalletLevelsPageModule)
  },
  {
    path: 'create-profile',
    loadChildren: () => import('./pages/profile-screens/create-profile/create-profile.module').then( m => m.CreateProfilePageModule)
  },
  {
    path: 'success-screen',
    loadChildren: () => import('./shared/components/popovers/success-screen/success-screen.module').then( m => m.SuccessScreenPageModule)
  },
  {
    path: 'cashback-details',
    loadChildren: () => import('./pages/cashback-screens/cashback-details/cashback-details.module').then( m => m.CashbackDetailsPageModule)
  },
  {
    path: 'bill-pay',
    loadChildren: () => import('./pages/bill-pay-screens/bill-pay/bill-pay.module').then( m => m.BillPayPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./shared/components/favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'bill-pay-category',
    loadChildren: () => import('./pages/bill-pay-screens/bill-pay-category/bill-pay-category.module').then( m => m.BillPayCategoryPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/bill-pay-screens/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'transfer-money',
    loadChildren: () => import('./pages/send-money-screens/transfer-money/transfer-money.module').then( m => m.TransferMoneyPageModule)
  },
  {
    path: 'request-money',
    loadChildren: () => import('./pages/request-money-screens/request-money/request-money.module').then( m => m.RequestMoneyPageModule)
  },
  {
    path: 'send-request',
    loadChildren: () => import('./pages/request-money-screens/send-request/send-request.module').then( m => m.SendRequestPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
