import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest, HttpInterceptor } from '@angular/common/http';
import { throwError, catchError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
    providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(private errorService: ErrorService) { }
    //private errorService: ErrorService
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        this.errorService.hide();
        return next.handle(req).pipe(
            catchError(error => {
                let errorMessage = '';
                if (error instanceof ErrorEvent) {
                    // client-side error
                    errorMessage = `Client-side error: ${error.error.message}`;
                } else {
                    // backend error
                    errorMessage = `Server-side error: ${error.status} ${error.message}`;
                }

                // aquí podrías agregar código que muestre el error en alguna parte fija de la pantalla.
                //             this.errorService.show(errorMessage);
                this.errorService.show();
                return throwError(() => errorMessage);
            })
        );
    }
}