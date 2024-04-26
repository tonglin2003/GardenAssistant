import {Injectable, Optional} from '@angular/core';
import {environment} from "../../environments/environment";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class ImgurFileServices {

    private apiUrl: string = "https://api.imgur.com/3/image";

    async uploadImageImgur(image: any): Promise<any>{
        // const formData = new FormData();
        // formData.append("image", image);
        //
        // try{
        //     console.log("From the service: " + formData);
        //     const response = await fetch(this.apiUrl, {
        //         method: "POST",
        //         headers: {
        //             'Authorization': `Client-ID 54c5c01f6051667`
        //         },
        //         body: formData
        //     });
        //     const data = await response.json();
        //     return data['data'];
        // } catch(error){
        //     console.error("Error: ", error);
        //     throw error;
        // }


      return new Promise((resolve,reject) => {

        // cut the data tags
        // let img=image.substr(image.indexOf(',') + 1);

        let fd =new FormData();
        fd.append('image',image);


        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.imgur.com/3/image', true);

        xhr.onload = resolve;
        xhr.onerror = reject;

        xhr.setRequestHeader("Authorization", `Bearer798c65133394c7c7619e408c82013fe433b40eab`);

        xhr.send(fd);
      })
    }

    constructor() {}
}
