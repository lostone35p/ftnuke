for i in {1..1000}
do
# Place curl command here
  -o /dev/null &
  echo "Iteration $i"
done 
