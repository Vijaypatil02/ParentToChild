import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {DialogcontentComponent} from '../dialogcontent/dialogcontent.component';
import {MatDialog} from '@angular/material/dialog';

export interface Datas  {
  id: number;
  username: string;
  email: string;
  action: string;
}
const ELEMENT_DATA: Element[] = [];
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() hero: any ;
  data: any = [];
  ELEMENT_DATA: Datas[] = [];
  displayedColumns: string[] = ['id', 'name', 'email' , 'action' ];
  // @ts-ignore
  dataSource: Datas[];
  // @ts-ignore
  dataSource = new MatTableDataSource<Datas>(this.ELEMENT_DATA);

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
  this.data = this.hero;
  const data = this.data as Datas[];
  // @ts-ignore
  this.dataSource = new MatTableDataSource<Datas>(data);
  // @ts-ignore
  this.dataSource.paginator = this.paginator;
  console.log(this.data);
  }
  // tslint:disable-next-line:typedef
  openDialog() {

    // @ts-ignore
    const dialogRef = this.dialog.open(DialogcontentComponent);
    // @ts-ignore
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
