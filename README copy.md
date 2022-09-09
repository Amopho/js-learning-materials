# sessions

##PET

## react-graph-vis

```
import Graph from "react-graph-vis"
```

## Graph Databases
- node
- edge
- focus on relations of nodes not on their values

## Hints

- small heading above the model - first find where the hint should pop up
- fir thgis purpose there should me created a neww componnet which would work with a dummy object. Just show which value does the dummy object contain.

Data structure:
```
 {
        "MT1" : {
             "hint" : "<p>This is the hint</p>"
         },
       "MT2" : {
             "hinweis" : "<p>This is the another hint</p>"
       }
      }
 ```
- so by this dummy model then it should throw the the appropiate hint if the pageModel type would also be MT1
- at the last one could create ConfigEntry in which the data would be written and then one should rebuild the component in such a way that it would grab the configEntry instead of the dummy object
- for that one one couikld use a function getConfugValue directly into the model and there the hint should be read only , so no one could change the model 
- it happens only in the configuration. One should rethink how to do it at this point of coding.
- in the settings themselves the whole process would be 2 level:
- first change the model from the list (which is retrieved from backend) and then the Hint would be determined.

## Terminal commands:
```
touch file1.txt file2.txt file3.txt
echo "Some line" > file1.txt
rm filename
rm -d dirname
rmdir dirname
rm -r dirname
ls -a
```
ctrl + R and type in the searched command texts

## Version Control
```
git status
git branch
git checkout branchName
git add .
git commit -m "message"
git pull
git push
```

### Branches workflow

## Contentss