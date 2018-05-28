<?php
/*
* @params $nbr  (number) -> first, second, third or fourth day of month
* @params $day  (string) -> name of the day in the week
* @params $mon  (number) -> number of the month to seach
* @params $year (number) -> number of the year to search
* @author MrXploder
*/

function nth_day_of_month($nbr, $day, $mon, $year){ 
   $date = mktime(0, 0, 0, $mon, 0, $year);

   if($date == 0){ 
      user_error(__FUNCTION__."(): Invalid month or year", E_USER_WARNING); 
      return(FALSE); 
   } 

   $day = ucfirst(strtolower($day));

   if(!in_array($day, array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'))){ 
      user_error(__FUNCTION__."(): Invalid day", E_USER_WARNING); 
      return(FALSE); 
   }

   for($week = 1; $week <= $nbr; $week++){ 
      $date = strtotime("next $day", $date); 
   }

   return($date); 
} 
// USAGE: 
//echo date("d-m-y", nth_day_of_month(1, 'monday', 1, 2018)); 
?>