import datetime

dateToday = datetime.datetime.today()
dateNY = datetime.datetime(2025,1,1)
daysCnt = dateNY-dateToday
print(daysCnt.days,"days before NewYear")