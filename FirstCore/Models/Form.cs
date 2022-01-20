using System;
using System.ComponentModel.DataAnnotations;


namespace FirstCore.Models
{
    public class Form
    {

        [Required, Range(0, 100)]
        public double Assignments { get; set; }

        [Required, Range(0, 100)]
        public double GroupProject { get; set; }

        [Required, Range(0, 100)]
        public double Quizzes { get; set; }

        [Required, Range(0, 100)]
        public double Exams { get; set; }

        [Required, Range(0, 100)]
        public double Intex { get; set; }


    }
  
    
}

  
                
          
              