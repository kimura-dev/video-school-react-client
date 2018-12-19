export default function friendlyDate(date){
  let creationDate = Date.now();

  if(typeof date === 'string'){
    creationDate = new Date(Date.parse(date));
  } else if (typeof date !== 'undefined'){
    creationDate = date;
  }

  let options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  options.timeZoneName = 'short';

  creationDate = creationDate.toLocaleDateString('en-US', options);

  return creationDate;
}