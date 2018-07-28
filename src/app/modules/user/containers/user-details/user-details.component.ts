import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { selectUserState } from '../../store/user.selections';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @ViewChild('vcr') div;
  svg;
  x;
  xAxis;
  y;
  width: number;
  height: number;
  margin;
  parentNativeElement;
  radius: number;
  g: any;

  constructor(
    element: ElementRef,
    private store: Store<any>) {
    this.parentNativeElement = element.nativeElement;
    this.width = 500;
    this.height = 400;
    // Mike Bostock "margin conventions"
    this.margin = {top: 20, right: 20, bottom: 30, left: 20};
    this.width = this.width - this.margin.left - this.margin.right;
    this.height = this.height - this.margin.top - this.margin.bottom;
    this.radius = Math.min(this.width, this.height) / 2;

  }

  ngOnInit() {
    this.svg = d3.select(this.div.nativeElement)
                  .append("svg")
                  .attr("width", this.width + this.margin.left + this.margin.right)
                  .attr("height", this.height + this.margin.top + this.margin.bottom);
    this.g = this.svg.append("g")
                .attr("transform", `translate(${this.margin.left + this.radius},${this.margin.top + this.radius})`);

    var color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

    var pie = d3.pie()
        .sort(null)
        .value(function(d) { return d.weight; });

    var path = d3.arc()
        .outerRadius(this.radius - 10)
        .innerRadius(0);

    var label = d3.arc()
        .outerRadius(this.radius - 40)
        .innerRadius(this.radius - 40);


    this.store.select(selectUserState).subscribe((s) => {
      const data = (s.ids as string[] ).map((id) => {
        return s.entities[id]
      })
      var arc = this.g.selectAll(".arc")
      .data(pie(data))
      .enter().append("g")
      .attr("class", "arc");

      arc.append("path")
      .attr("d", path)
      .attr("fill", function(d) { return color(d.data.weight); });

      arc.append("text")
      .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
      .attr("dy", "0.35em")
      .text(function(d) { return d.data.name; });
    })
  }

}
