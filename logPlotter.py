# Plots the results from a run of the rangefinder.

import matplotlib.pyplot as p

print('Enter filename (path from within logs/): ')
fn = input().strip()

f = open('logs/' + fn)
y = [t.strip('\n') for t in f.readlines()]

x = [t for t in range(len(y))]

p.plot(x,y)
p.show()