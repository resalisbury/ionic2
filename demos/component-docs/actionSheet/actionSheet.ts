import {Platform, Page, ActionSheet} from 'ionic/ionic';

@Page({
  templateUrl: 'actionSheet/actionSheet.html',
})
export class ActionSheetPage {

  constructor(actionSheet: ActionSheet, platform: Platform) {
    this.actionSheet = actionSheet;
    this.platform = platform;
  }

  openMenu() {
    if (this.platform.is('android')) {
      var androidSheet = {

        buttons: [
          { text: 'Share', icon: 'share' },
          { text: 'Play', icon: 'arrow-dropright-circle'},
          { text: 'Favorite', icon: 'ion-md-heart-outline'}
        ],
        destructiveText: 'Delete',
        titleText: 'Albums',
        cancelText: 'Cancel',
        cancel: function() {
          console.log('Canceled');
        },
        destructiveButtonClicked: () => {
          console.log('Destructive clicked');
        },
        buttonClicked: function(index) {
          console.log('Button clicked', index);
          if (index == 1) { return false; }
          return true;
        }
      };
    }

    this.actionSheet.open(androidSheet || {
      buttons: [
        { text: 'Share'},
        { text: 'Play'},
        { text: 'Favorite'}
      ],
      destructiveText: 'Delete',
      titleText: 'Albums',
      cancelText: 'Cancel',
      cancel: function() {
        console.log('Canceled');
      },
      destructiveButtonClicked: () => {
        console.log('Destructive clicked');
      },
      buttonClicked: function(index) {
        console.log('Button clicked', index);
        if (index == 1) { return false; }
        return true;
      }

    }).then(actionSheetRef => {
      console.log(actionSheetRef);
      this.actionSheetRef = actionSheetRef;
    });
  }

}
