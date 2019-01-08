import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  camera: boolean=true;

  @ViewChild("video")
    public video: ElementRef;

    @ViewChild("canvas")
    public canvas: ElementRef;

    public captures: any;

    public constructor() {
        this.captures = [];
    }

    public ngOnInit() { }

    public ngAfterViewInit() {
      if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) { 
          navigator.mediaDevices.getUserMedia({ video: {facingMode: "environment"} }).then(stream => {
              this.video.nativeElement.srcObject = stream;
              this.video.nativeElement.play();
          });
      }

//        var id =navigator.mediaDevices.enumerateDevices()
//   .then(devices => devices.find(d => d.kind == "videoinput" &&
//                                 d.label.indexOf("back") >= 0));

//                                 console.log('@@@@@@',id);
  }

  public capture() {
     
      var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 400, 480);
      this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
      //this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
      //this.captures = this.canvas.nativeElement.toDataURL("image/png");
      console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',this.captures[0]);
      this.camera=false;
  }

}