# Automated routines

deploy:
	@echo
	@echo Warning: This script assumes that this app can be deployed simply by force-pushing
	@echo on top of the *deploy* branch. It will also temporarily use a local *predeploy* branch
	@echo for preparing assets, that it will delete after it finishes.
	@echo
	@echo You need to be on the *master* branch. Press CTRL+C to cancel.
	@echo
	@echo Ready to start in 5
	@sleep 1
	@echo 4
	@sleep 1
	@echo 3
	@sleep 1
	@echo 2
	@sleep 1
	@echo 1
	@sleep 1
	@echo Let\'s go!
	-git branch -D predeploy
	@git checkout -b predeploy
	@npm run build
	@git add dist && git commit -am 'AUTOMATED COMMIT: Automatically bundling compiled assets as part of deploy'
	@git push dokku predeploy && git checkout master && git push dokku +predeploy:deploy
	@git branch -D predeploy && git push dokku :predeploy
	@echo
	@echo '--'
	@echo Done. It should be live momentarily.
	@echo
