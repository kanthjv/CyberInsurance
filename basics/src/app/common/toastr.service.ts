import { Injectable } from "@angular/core";

declare let toastr:any

@Injectable()
export class ToastrService{
    cus_success(message: string, title ?: string){
        toastr.success(message,title)
    }

    cus_info(message: string, title ?: string){
        toastr.info(message,title)
    }

    cus_warning(message: string, title ?: string){
        toastr.warning(message,title)
    }

    cus_error(message: string, title ?: string){
        toastr.error(message,title)
    }

}