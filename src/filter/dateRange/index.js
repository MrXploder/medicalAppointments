(function(){
  angular
  .module('angularApp')
  .filter('dateRange', dateRange);

  function dateRange(){
    return function(items, fromDate, toDate){
      var filtered = [];
      if(fromDate) toDate = fromDate;
      var from_date = moment(fromDate).format("DD-MM-YYYY");
      var to_date = moment(toDate).format("DD-MM-YYYY");
      angular.forEach(items, function(item){
        var now_date = moment(item.date).format("DD-MM-YYYY");
        if(from_date <= now_date && to_date >= now_date){ 
          filtered.push(item); 
        }
      });
      return filtered;
    }
  }
})();
