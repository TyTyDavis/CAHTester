import random
import csv
import os



THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
cardsFile = os.path.join(THIS_FOLDER, 'Cards - Sheet1.csv')

whiteBuffer = "Big butts"
white = "Little butts"
class blackDeck(self, cardsFile):
	self.cardsFile = cardsFile
	def getFive(whiteCard,whiteBuffer):
		count = 0
		while count < 5:
			with open(cardsFile) as f:
				reader = csv.reader(f)
				chosen_row = random.choice(list(reader))
				combo = chosen_row[0].format(whiteCard)
				print(combo)
				count += 1
		return