import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArsenalService } from '../arsenal.service';

@Component({
  selector: 'app-legendsview',
  templateUrl: './legendsview.component.html',
  styleUrls: ['./legendsview.component.css']
})
export class LegendsviewComponent implements OnInit {
  public CurrentLegend;
  /*
  public AllLegends=[
    {
      'ID':"1",
       'Name':'Thierry Henry',
        'Country':'France',
        'Football Clubs':['Arsenal','Barcelona','Napoli'],
        'Goals':282,
        'Poster':"./assets/henry.jpg",
        'Nicknames':['Mr. Arsenal','Magician','Highbury Wizard'],
        'Description':'Thierry Henry is the most decorated player of Arsenal. His career has spanned to almost a decade and over.'
    },
    {
      'ID':"2",
      'Name':'Dennis Bergkamp',
        'Country':'Netherlands',
        'Football Clubs':['Arsenal','Ajax','Inter Milan'],
        'Goals':240,
        'Poster':"./assets/bergkamp.jpg",
        'Nicknames':['Mr. Arsenal','Magician','Non Flying Dutchman'],
        'Description':'Arsenal glories cannot be remembered without Dennis Bergkamp. The greatest of great, Bergkamp has the second highest goalscorer for Arsenal.'
    },
    {'ID':"3",
      'Name':'Tony Adams',
        'Country':'France',
        'Football Clubs':['Arsenal','Barcelona','Napoli'],
        'Goals':221,
        'Poster':"./assets/adams.jpg",
        'Nicknames':['Mr. Arsenal','Magician','Highbury Wizard'],
        'Description':'The most successful captain of Arsenal Football Club, Adams led Arsenal to countless glories and was instrumental in setting up a winning mentality for the team.'
    },
    {
      'ID':"4",
      'Name':'Robert Pires',
      'Country':'Italy',
      'Football Clubs':['Arsenal','Barcelona','Napoli'],
      'Goals':282,
      'Poster':"./assets/pires.jpg",
      'Nicknames':['Mr. Arsenal','Magician','Highbury Wizard'],
      'Description':'The most vital playmaker for Arsenal FOotball Club, Pires has seen the best of the Arsenal. Teaming up with the likes of Henry and Bergkamp He saw the "Invincibles" era too.'
    },
    {
      'ID':"5",
      'Name':'Kanu',
      'Country':'France',
      'Football Clubs':['Arsenal','Barcelona','Napoli'],
      'Goals':282,
      'Poster':"./assets/kanu.jpg",
      'Nicknames':['Mr. Arsenal','Magician','Highbury Wizard'],
      'Description':'Kanu always made the highbur and Emirates scream with his fantastic goals. Kanu has been instrumental in getting most of the wonder goals for Arsenal.'
    },
    {
      'ID':"6",
      'Name':'Tomas Rosicky',
      'Country':'Sweden',
      'Football Clubs':['Arsenal','Barcelona','Napoli'],
      'Goals':142,
      'Poster':"./assets/rosciky.jpg",
      'Nicknames':['Mr. Arsenal','Magician','Highbury Wizard'],
      'Description':'Tommy or "Little Mozart" as he is most commonly reffered to is one the greatest gunners to impact the north london. His style of play was so interesting that he was given the title of "Little Mozart".'
    }
  ]
*/
  constructor(private _route: ActivatedRoute, private router: Router, public served:ArsenalService) {
    console.log("constructor has been called.");
   }

  ngOnInit() {
    console.log("ngintit called");
    let MyLegend=this._route.snapshot.paramMap.get('ID');
    console.log(MyLegend);
    this.CurrentLegend=this.served.LegendInfo(MyLegend); //arsenalservice is an object of services that will fetch the required info here.
  }
  /*public LegendInfo(CurrentLegend):any {
    for(let legend of this.AllLegends)
    {
       if(legend.ID==CurrentLegend)
       {
         this.CurrentLegend=legend;
       }

    }
    console.log(this.CurrentLegend)
  }
  */

}
