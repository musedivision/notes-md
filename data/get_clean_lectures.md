# Subsetting and Sorting

### Subsetting
create the df
``` R
X <- data.frame("var1"=sample(1:5), "var2"=sample(6:10), "var3"=sample(11:15))
## add some NA values
X <- X[sample(1:5),], X$var2[c(1:5)] = NA
```
by column
```R
X[,1]
X[,"var1"]
X[1:2,"var2"]
## and row
```
subsetting using logical statements
``` R
X[(X$var1 <= 3 & X$var3 > 11),]
```
__NA values__: subsetting on NA will not produce the actual rows
```R
X[which(X$var2 > 8),]
```
  - which() will return the rows without the NAs

### Sorting

```R
sort(X$var1, decreasing=TRUE, na.last=TRUE
```
### Ordering

```R
X[order(X$var1),]
X[order(X$var1, X$var3),]
```
### Ordering with Plyr

```R
library(plyr)
arrange(X,var1)
arrange(X,desc(var1))
```

### adding rows

```R
X$var4 <- rnorm(5)
Y <- cbind(X,rnorm(5))
Y <- rbind(X,rnorm(5))
```
