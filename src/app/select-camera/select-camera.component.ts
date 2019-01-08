import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-camera',
  templateUrl: './select-camera.component.html',
  styleUrls: ['./select-camera.component.css']
})
export class SelectCameraComponent implements OnInit {
  videoElement = document.querySelector('video');
 audioSelect = document.querySelector('select#audioSource');
 videoSelect = document.querySelector('select#videoSource');

  constructor() {

   }

  ngOnInit() {
    
  }

  






}
