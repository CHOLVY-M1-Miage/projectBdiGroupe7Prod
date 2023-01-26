import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataCenterService {
  identifiantUser!: String;
  mdp!: String;
  constructor() { }
}
