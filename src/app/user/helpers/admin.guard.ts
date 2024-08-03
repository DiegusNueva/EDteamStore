import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Ajusta la ruta de importación del servicio

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  // Verificar si el usuario está autenticado
  const isAuthenticated = authService.isLoggedIn();

  if (isAuthenticated) {
    return true;
  } else {
    // Usuario no autenticado, redirigir al componente de inicio de sesión
    router.navigate(['/login']);
    return false;
  }
};
