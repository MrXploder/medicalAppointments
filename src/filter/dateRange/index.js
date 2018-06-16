(function(){
  angular
  .module('angularApp')
  .filter('dateRange', dateRange);

  function dateRange(){
    return function(items, fromDate, toDate){
      let filtered = [],
          from_date = moment(fromDate, "DD-MM-YYYY"),
          to_date = moment(toDate, "DD-MM-YYYY"),
          now_date = null;

      if(!fromDate){ fromDate = moment().format("DD-MM-YYYY"); }
      if(!toDate){ toDate = fromDate; }
      angular.forEach(items, function(item){
        now_date = moment(item.date, "DD-MM-YYYY");
        if(from_date <= now_date && now_date <= to_date){ 
          filtered.push(item); 
        }
      });
      return filtered;
    }
  }
})();
