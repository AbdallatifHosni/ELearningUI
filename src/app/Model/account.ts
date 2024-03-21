export class Account {
    constructor(
        public accountAddress:	string='',
         public accounttype	:string='',
          public instructorIDFK	: number = 0,

    ){}
}
/*
accountAddress	string($email)
nullable: true
accounttype*
accountAddress	string($email)
nullable: true
accounttype*	string
minLength: 1
learner	Learner{...}
instructorIDFK	integer($int32)
nullable: true
*/