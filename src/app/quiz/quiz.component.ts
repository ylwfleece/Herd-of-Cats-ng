import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  public question:String;
  public questions:Array<String>;
  public answers:Array<String>;
  public questionIndex:number;
  public answerIndex:number;
  public correctAnswers:String;
  public correctAnswerCount:number;

  constructor() { 
    
  }

  ngOnInit() {

    this.questionIndex = 0;

    this.answerIndex = 0;

    this.questions = ["Question1", "Question2", "Question3"];

    this.answers = ["yes1", "no1", "maybe1",
    "yes2", "no2", "maybe2",
    "yes3", "no3", "maybe3"];

    this.question = this.questions[this.questionIndex];
  }

  public nextQuestion() {

    this.questionIndex++;

    this.question = this.questions[this.questionIndex];

    this.answerIndex++;


  }

}





